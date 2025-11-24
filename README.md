# 🤖 Chatbot Fullstack Integrado  
### Django REST Framework + React + Tailwind CSS  
**Processo Seletivo Fullstack – 4blue**  

<img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white" alt="Django"> <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"> <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind"> <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python">

Projeto desenvolvido como desafio técnico para a vaga de **Desenvolvedor(a) Fullstack** na 4blue.  
Uma aplicação completa de chatbot com respostas personalizadas por usuário (A, B e C), dashboard administrativo customizado e interface moderna.

---

### 🎥 Demonstração

![Demonstração do projeto](./demo.gif)
> *Clique na imagem para ver o vídeo completo (substitua pelo seu GIF ou link do YouTube/Loom)*

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

```bash
# 1. Clone o repositório
git clone https://github.com/JaninyNobrega/chatbot-fullstack.git
cd chatbot-fullstack

cd backend

# Criar e ativar ambiente virtual
python -m venv venv
# Windows
.\venv\Scripts\activate
# Mac/Linux
source venv/bin/activate

# Instalar dependências
pip install -r requirements.txt

# Aplicar migrações
python manage.py migrate

# Iniciar servidor
python manage.py runserver
# → http://127.0.0.1:8000

# Em outro terminal
cd ../frontend

npm install
npm start
# → Abre automaticamente em http://localhost:3000

🔐 Acesso ao Admin

Tipo,URL,Credenciais
Admin Django,http://127.0.0.1:8000/admin/,janinynobrega@gmail.com
Dashboard,http://127.0.0.1:8000/admin/dashboard/,Senha: testetecnico
API,http://127.0.0.1:8000/api/,

🛠 Decisões Técnicas

class Message(models.Model):
    user       = models.CharField(max_length=1)  # A, B ou C
    text       = models.TextField()
    response   = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

🧰 Tecnologias Utilizadas
https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white https://img.shields.io/badge/Django-092E20?style=flat-square&logo=django&logoColor=white https://img.shields.io/badge/Django_REST-092E20?style=flat-square&logo=django&logoColor=white https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwind-css&logoColor=white https://img.shields.io/badge/Chart.js-FF6384?style=flat-square&logo=chart.js&logoColor=white https://img.shields.io/badge/SQLite-003B57?style=flat-square&logo=sqlite&logoColor=white



👩‍💻 Autora
Janiny Nóbrega
Desenvolvedora Fullstack | Apaixonada por Python, React e boas experiências de usuário
🔗 LinkedIn | GitHub
Projeto desenvolvido com carinho como parte do processo seletivo da 4blue 💙