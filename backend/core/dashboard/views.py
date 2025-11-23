from django.shortcuts import render
from chat.models import Message


def dashboard(request):
    total_messages = Message.objects.count()
    return render(request, "dashboard.html", {"total_messages": total_messages})
