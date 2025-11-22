from django.contrib import admin
from django.urls import path
from chat.views import send_message, history

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/send/', send_message),
    path('api/history/<str:user>/', history),
]
