from django.shortcuts import render
from django.db.models import Count
from chat.models import Message

def dashboard(request):

    total_messages = Message.objects.count()

# Gráfico de mensagem por usuário
    messages_by_user = (
        Message.objects.values('user')
        .annotate(total=Count('id'))
        .order_by('-total')
    )

    context = {
        'total_messages': total_messages,
        'messages_by_user': messages_by_user,
    }

    return render(request, 'dashboard/dashboard.html', context)
