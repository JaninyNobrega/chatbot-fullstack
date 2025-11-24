# 🤖 Chatbot Fullstack Integrado  
### Django REST Framework + React + Tailwind CSS  
**Processo Seletivo Fullstack – 4blue**  

<img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white" alt="Django"> <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"> <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind"> <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python">

Projeto desenvolvido como desafio técnico para a vaga de **Desenvolvedor(a) Fullstack** na 4blue.  
Uma aplicação completa de chatbot com respostas personalizadas por usuário (A, B e C), dashboard administrativo customizado e interface moderna.

---

### 🎥 Demonstração

![Demonstração do projeto](./demo.gif)

---

### ✨ Funcionalidades Principais

| Área         | Funcionalidades |
|--------------|------------------|
| **Backend**  | • API REST completa<br>• Respostas personalizadas por usuário (A/B/C)<br>• Histórico filtrado<br>• Admin customizado com dashboard<br>• Gráficos interativos (Chart.js)<br>• CORS configurado |
| **Frontend** | • Interface 100% responsiva<br>• Troca dinâmica entre usuários<br>• Chat em tempo real<br>• Design moderno em tons de azul<br>• Navegação com React Router<br>• Tailwind CSS totalmente configurado |

---

### 🚀 Como Executar o Projeto Localmente

#### Pré-requisitos
- Python 3.9+
- Node.js 18+
- Git
- Django 5.2+ (ou instale via pip)

#### Clone o repositório
git clone https://github.com/JaninyNobrega/chatbot-fullstack.git        
acesse a pasta do backend       
\cd chatbot-fullstack        
\cd backend      

#### Criar e ativar ambiente virtual
python -m venv venv
#### Windows
.\venv\Scripts\activate
#### Mac/Linux
source venv/bin/activate

#### Instalar dependências
- Se houver `requirements.txt`, prefira instalar com:

```powershell
pip install -r requirements.txt
```

- Caso não exista, instale manualmente as dependências principais:

```powershell
pip install django==5.2.8 djangorestframework django-cors-headers django-import-export
```

#### Aplicar migrações
python manage.py migrate

#### Iniciar servidor
python manage.py runserver
### → http://127.0.0.1:8000

### Em outro terminal
acesse a pasta do frontend      
\cd frontend

npm install
npm start
#### → Abre automaticamente em http://localhost:3000

## 🔐 Acesso ao Admin

| Tipo | URL | Credenciais |
| --- | --- | --- |
| Admin Django | `http://127.0.0.1:8000/admin/` | `janinynobrega@gmail.com` |
| Dashboard | `http://127.0.0.1:8000/admin/dashboard/` | `Senha: testetecnico` |

## 🛠 Decisões Técnicas

Exemplo do modelo principal usado no projeto:

```python
class Message(models.Model):
    user = models.CharField(max_length=1)  # A, B ou C
    text = models.TextField()  # Mensagem do usuário
    response = models.TextField() # Resposta do bot
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user}: {self.text[:20]}"
```

## 🧰 Tecnologias Utilizadas

![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![Django](https://img.shields.io/badge/Django-092E20?style=flat-square&logo=django&logoColor=white)
![Django REST](https://img.shields.io/badge/DRF-092E20?style=flat-square&logo=django&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwind-css&logoColor=white)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=flat-square&logo=chart.js&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=flat-square&logo=sqlite&logoColor=white)

## 👩‍💻 Desenvolvedor

Janiny Nóbrega  
Projeto desenvolvido como parte do processo seletivo da 4blue.