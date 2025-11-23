from django.contrib import admin
from import_export.admin import ImportExportModelAdmin
from .models import Message
from core.custom_admin import custom_admin_site


@admin.register(Message, site=custom_admin_site)
class MessageAdmin(ImportExportModelAdmin):
    list_display = ("id", "user", "text", "response", "created_at")
