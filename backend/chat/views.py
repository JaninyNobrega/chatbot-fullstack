from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Message
from .serializers import MessageSerializer


@api_view(['POST'])
def send_message(request):
    user = request.data.get("user")
    text = request.data.get("text")

    # Respostas personalizadas por usuário
    respostas = {
       "A": "Olá usuário A, agradecemos seu contato! Sua solicitação está em análise.",
       "B": "Olá usuário B! Em breve nossa equipe retornará com mais informações.",
       "C": "Olá usuário C! Recebemos sua mensagem e estamos cuidando disso."
    }

    # Se o usuário não estiver mapeado, usa resposta padrão
    response_text = respostas.get(
        user,
        "Olá! Sua mensagem foi recebida. Em breve entraremos em contato."
    )

    # Salva a mensagem
    message = Message.objects.create(
        user=user,
        text=text,
        response=response_text
    )

    # Retorna com todos os campos (id, created_at, etc.)
    return Response(MessageSerializer(message).data)


@api_view(['GET'])
def history(request, user):
    messages = Message.objects.filter(user=user).order_by('-created_at')
    return Response(MessageSerializer(messages, many=True).data)
