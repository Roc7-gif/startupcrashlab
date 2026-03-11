from rest_framework import serializers
from .models import *
from django.contrib.auth import authenticate
from django.core.exceptions import ValidationError
class RegisterSerializer(serializers.ModelSerializer):
    """Serializer pour le modèle MyUser"""
    password = serializers.CharField(write_only=True, required=True, style={'input_type': 'password'})
    password_confirm = serializers.CharField(write_only=True, required=True, style={'input_type': 'password'})
    class Meta:
        model = MyUser
        fields = [
            'email', 'password', 'password_confirm'
        ]
        extra_kwargs = {
            'first_name': {'required': False},
            'last_name': {'required': False},
        }
    
    def validate(self, data):
        if data.get('password') != data.get('password_confirm'):
            raise serializers.ValidationError({"password": "Les mots de passe ne correspondent pas."})
        return data
    
    def create(self, validated_data):
        validated_data.pop('password_confirm')
        password = validated_data.pop('password')
        user = MyUser.objects.create(**validated_data)
        user.set_password(password)
        user.save()
        return user
    
    def update(self, instance, validated_data):
        if 'password' in validated_data:
            password = validated_data.pop('password')
            instance.set_password(password)
        return super().update(instance, validated_data)


class MyUserSerializer(serializers.ModelSerializer):
    """Serializer pour le modèle MyUser"""
    password = serializers.CharField(write_only=True, required=True, style={'input_type': 'password'})
    password_confirm = serializers.CharField(write_only=True, required=True, style={'input_type': 'password'})
    
    class Meta:
        model = MyUser
        fields = [
            'id', 'email', 'password', 'password_confirm', 'user_type', 
            'phone_number', 'company_name', 'bio', 'profile_image',
            'linkedin_url', 'twitter_url', 'first_name', 'last_name',
            'created_at', 'updated_at', 'is_active', 'date_joined'
        ]
        read_only_fields = ['id', 'created_at', 'updated_at', 'date_joined', 'is_active']
        extra_kwargs = {
            'first_name': {'required': False},
            'last_name': {'required': False},
        }
    
    def validate(self, data):
        if data.get('password') != data.get('password_confirm'):
            raise serializers.ValidationError({"password": "Les mots de passe ne correspondent pas."})
        return data
    
    def create(self, validated_data):
        validated_data.pop('password_confirm')
        password = validated_data.pop('password')
        user = MyUser.objects.create_user(**validated_data)
        user.set_password(password)
        user.save()
        return user
    
    def update(self, instance, validated_data):
        if 'password' in validated_data:
            password = validated_data.pop('password')
            instance.set_password(password)
        return super().update(instance, validated_data)

# # class CrashReportSerializer(serializers.ModelSerializer):
# #     """Serializer pour les crash reports"""
# #     status_display = serializers.CharField(source='get_status_display', read_only=True)
    
# #     class Meta:
# #         model = CrashReport
# #         fields = [
# #             'id', 'report_id', 'title', 'startup_type', 'status', 'status_display',
# #             'cause', 'key_metrics', 'industry', 'founded_year', 'created_at', 'is_public'
# #         ]
# #         read_only_fields = ['id', 'report_id', 'created_at']


# # class ProgramPackSerializer(serializers.ModelSerializer):
# #     """Serializer pour les packs de programme"""
# #     pack_type_display = serializers.CharField(source='get_pack_type_display', read_only=True)
    
# #     class Meta:
# #         model = ProgramPack
# #         fields = [
# #             'id', 'pack_type', 'pack_type_display', 'name', 'emoji', 'objective',
# #             'deliverables', 'gradient_color', 'border_color', 'icon_color', 'bg_glow',
# #             'price', 'is_active', 'order', 'created_at', 'updated_at'
# #         ]
# #         read_only_fields = ['id', 'created_at', 'updated_at']


# # class CoachSerializer(serializers.ModelSerializer):
# #     """Serializer pour les coaches"""
    
# #     class Meta:
# #         model = Coach
# #         fields = [
# #             'id', 'name', 'title', 'role', 'bio', 'image', 'experience_years',
# #             'founders_coached', 'startups_launched', 'linkedin_url', 'twitter_url',
# #             'github_url', 'is_main_coach', 'is_active', 'created_at'
# #         ]
# #         read_only_fields = ['id', 'created_at']


# # class TestimonialSerializer(serializers.ModelSerializer):
# #     """Serializer pour les témoignages"""
# #     badge_display = serializers.CharField(source='get_badge_display', read_only=True)
# #     rating_stars = serializers.SerializerMethodField()
    
# #     class Meta:
# #         model = Testimonial
# #         fields = [
# #             'id', 'client_name', 'client_role', 'client_company', 'client_avatar',
# #             'avatar_initials', 'content', 'rating', 'rating_stars', 'badge',
# #             'badge_display', 'is_featured', 'is_active', 'created_at'
# #         ]
# #         read_only_fields = ['id', 'created_at']
    
# #     def get_rating_stars(self, obj):
# #         """Retourne une chaîne d'étoiles pour l'affichage"""
# #         return '★' * obj.rating + '☆' * (5 - obj.rating)


# # class BookResourceSerializer(serializers.ModelSerializer):
# #     """Serializer pour les ressources livres"""
    
# #     class Meta:
# #         model = BookResource
# #         fields = [
# #             'id', 'title', 'description', 'cover_image', 'cover_image_url',
# #             'border_color', 'link_url', 'order', 'is_active', 'created_at'
# #         ]
# #         read_only_fields = ['id', 'created_at']




# # class EmailNotificationSerializer(serializers.ModelSerializer):
# #     """Serializer pour les notifications email"""
# #     notification_type_display = serializers.CharField(source='get_notification_type_display', read_only=True)
    
# #     class Meta:
# #         model = EmailNotification
# #         fields = [
# #             'id', 'recipient', 'notification_type', 'notification_type_display',
# #             'pack', 'subject', 'content', 'sent_at', 'is_delivered',
# #             'related_enrollment'
# #         ]
# #         read_only_fields = ['id', 'sent_at']



# # class ContactMessageSerializer(serializers.ModelSerializer):
# #     """Serializer pour les messages de contact"""
    
# #     class Meta:
# #         model = ContactMessage
# #         fields = ['id', 'name', 'email', 'subject', 'message', 'is_read', 'created_at']
# #         read_only_fields = ['id', 'created_at', 'is_read']


# # class ContactMessageCreateSerializer(serializers.ModelSerializer):
# #     """Serializer pour la création d'un message de contact"""
    
# #     class Meta:
# #         model = ContactMessage
# #         fields = ['name', 'email', 'subject', 'message']




# # class ProgramPackDetailSerializer(serializers.ModelSerializer):
# #     """Serializer détaillé pour les packs avec statistiques"""
# #     enrollments_count = serializers.IntegerField(read_only=True)
# #     active_enrollments = serializers.IntegerField(read_only=True)
    
# #     class Meta:
# #         model = ProgramPack
# #         fields = ProgramPackSerializer.Meta.fields + ['enrollments_count', 'active_enrollments']


# # class CrashReportDetailSerializer(serializers.ModelSerializer):
# #     """Serializer détaillé pour les crash reports avec statistiques"""
    
# #     class Meta:
# #         model = CrashReport
# #         fields = CrashReportSerializer.Meta.fields + ['key_metrics']


# # # Serializer pour l'import/export
# # class ProgramPackImportExportSerializer(serializers.ModelSerializer):
# #     """Serializer pour l'import/export des packs"""
    
# #     class Meta:
# #         model = ProgramPack
# #         fields = '__all__'


# # # Serializer pour le changement de mot de passe
# # class ChangePasswordSerializer(serializers.Serializer):
# #     """Serializer pour le changement de mot de passe"""
# #     old_password = serializers.CharField(required=True, style={'input_type': 'password'})
# #     new_password = serializers.CharField(required=True, style={'input_type': 'password'})
# #     confirm_password = serializers.CharField(required=True, style={'input_type': 'password'})
    
# #     def validate(self, data):
# #         if data['new_password'] != data['confirm_password']:
# #             raise serializers.ValidationError({"confirm_password": "Les nouveaux mots de passe ne correspondent pas."})
# #         return data


# # # Serializer pour la réinitialisation de mot de passe
# # class PasswordResetRequestSerializer(serializers.Serializer):
# #     """Serializer pour demander une réinitialisation de mot de passe"""
# #     email = serializers.EmailField()


# class PasswordResetConfirmSerializer(serializers.Serializer):
#     """Serializer pour confirmer la réinitialisation de mot de passe"""
#     token = serializers.CharField(required=True)
#     new_password = serializers.CharField(required=True, style={'input_type': 'password'})
#     confirm_password = serializers.CharField(required=True, style={'input_type': 'password'})
    
#     def validate(self, data):
#         if data['new_password'] != data['confirm_password']:
#             raise serializers.ValidationError({"confirm_password": "Les mots de passe ne correspondent pas."})
#         return data