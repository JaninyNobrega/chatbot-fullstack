from django.contrib import admin
from .models import Message
from core.custom_admin import custom_admin_site

@admin.register(Message, site=custom_admin_site)
class MessageAdmin(admin.ModelAdmin):
    list_display = ("user", "text", "response", "created_at")
    search_fields = ("user", "text")
    list_filter = ("created_at",)
