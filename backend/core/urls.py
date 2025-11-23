from django.urls import path
from core.custom_admin import custom_admin_site
from chat.views import send_message, history
from core.views import home

urlpatterns = [
    path("", home, name="home"),
    path("admin/", custom_admin_site.urls), 
    path("api/send/", send_message),
    path("api/history/<str:user>/", history),
]
