from django.shortcuts import render
from rest_framework import generics
from rest_framework import permissions
from .models import *
from django.urls import path
from django.core.mail import send_mail
from rest_framework.views import APIView
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from rest_framework.response import Response
from rest_framework_simplejwt.views import    TokenObtainPairView,    TokenRefreshView
from startupcrash import settings
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer , TokenRefreshSerializer

# Create your views here.
from .serializers import *

# serializers 
class MyTokenObtainPairSerializer(TokenObtainPairSerializer) : 
    username_field ='email'
  

  

class MyTokenObtainPairView (TokenObtainPairView) : 
    serializer_class = MyTokenObtainPairSerializer


class MyTokenRefreshView(TokenRefreshView):
    serializer_class = TokenRefreshSerializer    


class Register(generics.CreateAPIView):
    serializer_class = RegisterSerializer 
    queryset = MyUser.objects.all()
    permission_classes  = [permissions.AllowAny , ]
class CreateReservation(APIView):
 permission_classes = [permissions.IsAuthenticated ,]
 def post(self, request):
        try:
            data = request.data 
            email = data.get("email")
            program = data.get("program")
            date = data.get("date")

            html = render_to_string(
                "emails/reservation.html",
                {
                    "email": email,
                    "date": date,
                    "program": program
                }
            )

            text = strip_tags(html)
            print(program)
            try:

                Reservation.objects.create(
                    pack_name = program.get('pack') ,
                    date_revservation = date,
                    user = MyUser.objects.filter(email=email).first()

                )
            except : 
              return Response({"status" : 'error' , 'error' :f" Une reservation à déja été enregistré pour cette date " } ,status=400)

            

            send_mail(
                subject="Nouvelle réservation",
                message=text,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=["zossroc@gmail.com" ,email],
                html_message=html,
                fail_silently=False
            )
            return Response({"status" : 'success'})

        except Exception as e :
            return Response({"status" : 'error' , 'error' :f"Erreur lors de l'envoi du mail {e}" } ,status=400)

