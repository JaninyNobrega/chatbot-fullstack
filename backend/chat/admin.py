from django.contrib import admin
from import_export import resources
from import_export.admin import ImportExportModelAdmin
from .models import Message


# para exportar
class MessageResource(resources.ModelResource):
    class Meta:
        model = Message
        fields = ("id", "user", "text", "response", "created_at")


# registrar no admin
@admin.register(Message)
class MessageAdmin(ImportExportModelAdmin):
    resource_class = MessageResource

    list_display = ("id", "user", "short_text", "short_response", "formatted_date")
    list_filter = ("user", "created_at")
    search_fields = ("text", "response", "user")
    ordering = ("-created_at",)
    list_per_page = 20

    # resumir textos
    def short_text(self, obj):
        return (obj.text[:50] + "...") if len(obj.text) > 50 else obj.text
    short_text.short_description = "Mensagem"

    def short_response(self, obj):
        return (obj.response[:50] + "...") if len(obj.response) > 50 else obj.response
    short_response.short_description = "Resposta"

    # formatar data
    def formatted_date(self, obj):
        return obj.created_at.strftime("%d/%m/%Y – %H:%M")
    formatted_date.short_description = "Data"
