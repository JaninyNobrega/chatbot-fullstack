from django.contrib.admin import AdminSite
from django.contrib.auth.models import User, Group
from django.contrib import admin
from django.urls import path
from core.dashboard.views import dashboard


class CustomAdmin(AdminSite):
    site_header = "Painel Administrativo – Chatbot"
    site_title = "Admin Chatbot"
    index_title = "Bem-vinda ao Painel"

    def get_urls(self):
        urls = super().get_urls()

        custom_urls = [
            path("dashboard/", self.admin_view(dashboard), name="dashboard"),
        ]

        return custom_urls + urls


custom_admin_site = CustomAdmin(name="custom_admin")

# 🔹 Registrar os modelos padrão (usuarios, grupos etc.)
custom_admin_site.register(User)
custom_admin_site.register(Group)
