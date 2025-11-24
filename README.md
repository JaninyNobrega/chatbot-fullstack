# 📘 Chatbot Fullstack – Teste Técnico 4blue

Este projeto foi desenvolvido como parte do **processo seletivo para a vaga Fullstack na empresa 4blue**.  
O objetivo é demonstrar experiência com **Django + Django REST Framework (backend)** e **React + Tailwind CSS (frontend)**, incluindo integração completa entre as duas aplicações, dashboard administrativo e manipulação de dados.

---

# 🧩 Funcionalidades do Projeto

### 🟦 Backend (Django)
✔ API REST para envio de mensagens  
✔ Armazena mensagens com ORM  
✔ Histórico filtrado por usuário  
✔ Respostas diferentes para cada usuário (A, B e C)  
✔ Admin customizado (com dashboard personalizado)  
✔ Dashboard com gráfico Chart.js  
✔ Home institucional com links  
✔ Permite acesso ao Admin e ao Dashboard  
✔ Integração com frontend via CORS  

### 🟦 Frontend (React + Tailwind)
✔ Interface moderna em tons de azul  
✔ Troca entre usuários A, B e C  
✔ Chat funcional  
✔ Histórico por usuário  
✔ Botão para acessar o Admin  
✔ Totalmente responsivo  
✔ Tailwind configurado corretamente  
✔ Navegação com React Router  

---

# 🗂 Estrutura do Projeto

/backend
core/
chat/
dashboard/
db.sqlite3
manage.py

/frontend
src/
public/
tailwind.config.js
postcss.config.js
package.json


---

# ⚙️ Como rodar o projeto localmente

## 🟦 1. Clonar o repositório

```bash
git clone https://github.com/SEU_REPOSITORIO_AQUI.git
cd chatbot-fullstack

🔵 BACKEND – Django
2. Criar e ativar o ambiente virtual
Windows:
cd backend
python -m venv venv
venv\Scripts\activate

Mac/Linux:
python3 -m venv venv
source venv/bin/activate

3. Instalar dependências
pip install -r requirements.txt


Se necessário:

pip install djangorestframework
pip install django-cors-headers

4. Rodar migrações
python manage.py migrate

5. Rodar o servidor do backend
python manage.py runserver


Backend disponível em:

http://127.0.0.1:8000/

🔐 Acessar o painel admin

Credenciais criadas para o avaliador:

Usuário: janinynobrega@gmail.com

Senha: testetecnico

Admin:

http://127.0.0.1:8000/admin/


Dashboard:

http://127.0.0.1:8000/admin/dashboard/

🟦 FRONTEND – React + Tailwind
1. Entrar na pasta do frontend
cd ../frontend

2. Instalar dependências
npm install


Confere automaticamente:

✔ React
✔ React Router
✔ TailwindCSS
✔ PostCSS
✔ Autoprefixer

3. Verificar arquivos Tailwind (já configurados)
index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e40af",
        secondary: "#1e3a8a"
      }
    }
  },
  plugins: [],
}

postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}


💙 Tudo confirmado — o avaliador rodará sem erros de Tailwind.

4. Rodar o frontend
npm start


Acessar:

http://localhost:3000

📊 Dashboard

Visualizar:

http://127.0.0.1:8000/admin/dashboard/


Apresenta:

Total de mensagens

Gráfico de mensagens por usuário

Interface com Tailwind integrada ao Django Admin

🧠 Decisões técnicas explicadas
📌 1. Modelagem Django (Message)

O model segue:

Campo	Descrição
user	Identifica o usuário A, B ou C
text	Mensagem enviada
response	Resposta automática gerada
created_at	Registro automático de data

Escolha pensada para manter o foco no fluxo do chat e no relacionamento com o frontend.

📌 2. API e lógica

POST /api/send/ cria mensagens

Resposta automática muda conforme usuário

GET /api/history/<user>/ filtra o histórico

Serialização feita com DRF

📌 3. Frontend React

useState → controla mensagens e usuário ativo

useEffect → recarrega histórico

Navegação com React Router

Componentização clara: Chat, Historico, Header, UserSelector

Tailwind para estilização moderna

📌 4. Integração Fullstack

Comunicação via fetch

CORS configurado

Backend e frontend se integram sem proxy

✔️ Conclusão

Projeto demonstra:

Arquitetura completa fullstack

API REST funcional

Dashboard administrativo profissional

Frontend moderno com Tailwind

Lógica de filtragem por usuário

Organização limpa e clara

👩‍💻 Autora

Janiny Nóbrega
Projeto criado para o teste técnico da 4blue.