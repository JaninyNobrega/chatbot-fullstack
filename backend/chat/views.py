from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Message
from .serializers import MessageSerializer


@api_view(['POST'])
def send_message(request):
    user = request.data.get("user")
    text = request.data.get("text")

    response_text = f"Resposta automática para: {text}"

    message = Message.objects.create(
        user=user,
        text=text,
        response=response_text
    )

    return Response(MessageSerializer(message).data)


@api_view(['GET'])
def history(request, user):
    messages = Message.objects.filter(user=user).order_by('-created_at')
    return Response(MessageSerializer(messages, many=True).data)

