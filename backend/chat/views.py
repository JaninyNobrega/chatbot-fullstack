from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Message
from .serializers import MessageSerializer

@api_view(['POST'])
def send_message(request):
    user = request.data.get("user")
    text = request.data.get("text")

    if user == "A":
        response_text = "Olá Usuário A! Obrigado por sua mensagem."
    else:
        response_text = "Olá Usuário B! Recebemos sua mensagem."

    message = Message.objects.create(
        user=user,
        text=text,
        response=response_text
    )

    return Response(MessageSerializer(message).data)

@api_view(['GET'])
def history(request, user):
    messages = Message.objects.filter(user=user).order_by("created_at")
    return Response(MessageSerializer(messages, many=True).data)
