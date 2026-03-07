from django.db import models
from django.contrib.auth.models import AbstractUser ,Group , Permission
from django.core.validators import MinValueValidator, MaxValueValidator
import uuid

# Create your models here.

class MyUser(AbstractUser):
    """Custom User model for the platform"""
    USER_TYPE_CHOICES = (
        ('founder', 'Founder'),
        ('student', 'Student Entrepreneur'),
        ('freelance', 'Freelance'),
        ('intrapreneur', 'Intrapreneur'),
    )
    username = None
    email = models.EmailField(unique = True)

    USERNAME_FIELD="email"

    user_type = models.CharField(max_length=20, choices=USER_TYPE_CHOICES, default='founder')
    phone_number = models.CharField(max_length=20, blank=True)
    company_name = models.CharField(max_length=100, blank=True)
    bio = models.TextField(blank=True)
    profile_image = models.ImageField(upload_to='profiles/', blank=True, null=True)
    linkedin_url = models.URLField(blank=True)
    twitter_url = models.URLField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    REQUIRED_FIELDS = []
    
    groups = models.ManyToManyField(
        Group,
        related_name="myuser_set",   # ← change le nom
        blank=True,
        help_text='The groups this user belongs to.',
        verbose_name='groups',
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name="myuser_permissions_set",  # ← change le nom
        blank=True,
        help_text='Specific permissions for this user.',
        verbose_name='user permissions',
    )

    
    def __str__(self):
        return f"{self.username} - {self.email}"


# class CrashReport(models.Model):
#     """CrashIndex reports - anonymous startup failure/success data"""
#     STATUS_CHOICES = (
#         ('success', 'Succès'),
#         ('failure', 'Échec'),
#         ('in_progress', 'En Cours'),
#     )
    
#     report_id = models.CharField(max_length=20, unique=True, default=uuid.uuid4)
#     title = models.CharField(max_length=200)
#     startup_type = models.CharField(max_length=100)  # e.g., "SaaS B2B", "App Santé (B2C)"
#     status = models.CharField(max_length=20, choices=STATUS_CHOICES)
#     cause = models.TextField()
#     key_metrics = models.JSONField(default=dict)  # Store metrics like LTV/CAC ratio
#     industry = models.CharField(max_length=100, blank=True)
#     founded_year = models.IntegerField(null=True, blank=True)
#     created_at = models.DateTimeField(auto_now_add=True)
#     is_public = models.BooleanField(default=True)
    
#     class Meta:
#         ordering = ['-created_at']
    
#     def __str__(self):
#         return f"{self.report_id} - {self.title}"


# class ProgramPack(models.Model):
#     """Program packs (Idée, Marché, Structure, Scale)"""
#     PACK_TYPES = (
#         ('idee', 'Pack Idée'),
#         ('marche', 'Pack Marché'),
#         ('structure', 'Pack Structure'),
#         ('scale', 'Pack Scale'),
#     )
    
#     pack_type = models.CharField(max_length=20, choices=PACK_TYPES, unique=True)
#     name = models.CharField(max_length=100)
#     emoji = models.CharField(max_length=10, default='📦')
#     objective = models.TextField()
#     deliverables = models.JSONField(default=list)  # List of deliverables
#     gradient_color = models.CharField(max_length=50, default='from-blue-50 to-white')
#     border_color = models.CharField(max_length=50, default='border-blue-200')
#     icon_color = models.CharField(max_length=50, default='text-blue-500')
#     bg_glow = models.CharField(max_length=50, default='bg-blue-100')
#     price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
#     is_active = models.BooleanField(default=True)
#     order = models.IntegerField(default=0)
#     created_at = models.DateTimeField(auto_now_add=True)
#     updated_at = models.DateTimeField(auto_now=True)
    
#     class Meta:
#         ordering = ['order']
    
#     def __str__(self):
#         return self.name


# class Coach(models.Model):
#     """Coach/Team member information"""
#     name = models.CharField(max_length=100)
#     title = models.CharField(max_length=200)
#     role = models.CharField(max_length=100)
#     bio = models.TextField()
#     image = models.ImageField(upload_to='team/')
#     experience_years = models.IntegerField(default=0)
#     founders_coached = models.IntegerField(default=0)
#     startups_launched = models.IntegerField(default=0)
#     linkedin_url = models.URLField(blank=True)
#     twitter_url = models.URLField(blank=True)
#     github_url = models.URLField(blank=True)
#     is_main_coach = models.BooleanField(default=False)
#     is_active = models.BooleanField(default=True)
#     created_at = models.DateTimeField(auto_now_add=True)
    
#     class Meta:
#         ordering = ['-is_main_coach', 'order']
#         verbose_name_plural = "Coaches"
    
#     def __str__(self):
#         return self.name



# class BookResource(models.Model):
#     """Books/resources displayed in the bookshelf"""
#     title = models.CharField(max_length=200)
#     description = models.TextField(blank=True)
#     cover_image = models.ImageField(upload_to='books/')
#     cover_image_url = models.URLField(blank=True, help_text="Fallback URL if no image")
#     border_color = models.CharField(max_length=20, default='white')
#     link_url = models.URLField(blank=True)
#     order = models.IntegerField(default=0)
#     is_active = models.BooleanField(default=True)
#     created_at = models.DateTimeField(auto_now_add=True)
    
#     class Meta:
#         ordering = ['order']
    
#     def __str__(self):
#         return self.title



# class EmailNotification(models.Model):
#     """Track email notifications sent"""
#     NOTIFICATION_TYPES = (
#         ('pack_info', 'Informations Pack'),
#         ('booking_confirmation', 'Confirmation Réservation'),
#         ('reminder', 'Rappel'),
#         ('follow_up', 'Suivi'),
#     )
    
#     recipient = models.EmailField()
#     notification_type = models.CharField(max_length=30, choices=NOTIFICATION_TYPES)
#     pack = models.ForeignKey(ProgramPack, on_delete=models.SET_NULL, null=True, blank=True)
#     subject = models.CharField(max_length=255)
#     content = models.TextField()
#     sent_at = models.DateTimeField(auto_now_add=True)
#     is_delivered = models.BooleanField(default=True)
#     related_enrollment = models.ForeignKey(ProgramEnrollment, on_delete=models.SET_NULL, null=True, blank=True)
    
#     class Meta:
#         ordering = ['-sent_at']
    
#     def __str__(self):
#         return f"{self.notification_type} - {self.recipient} - {self.sent_at}"



# class ContactMessage(models.Model):

    # """Contact form submissions"""
    # name = models.CharField(max_length=100)
    # email = models.EmailField()
    # subject = models.CharField(max_length=200)
    # message = models.TextField()
    # is_read = models.BooleanField(default=False)
    # created_at = models.DateTimeField(auto_now_add=True)
    
    # class Meta:
    #     ordering = ['-created_at']
    
    # def __str__(self):
    #     return f"{self.name} - {self.subject}"


class Reservation (models.Model) : 
    pack_name = models.CharField(max_length=200)    
    date_revservation = models.DateTimeField(unique=True)
    user = models.ForeignKey( MyUser, on_delete=models.CASCADE , related_name='reservations' , null=True)
