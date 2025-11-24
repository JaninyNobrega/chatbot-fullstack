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
    /core
    /chat
    /dashboard
    db.sqlite3
    manage.py

/frontend
    /src
        /components
        App.js
        index.js
    package.json

---

# ⚙️ Como rodar o projeto localmente

#### 🟦 1. Clonar o repositório

git clone https://github.com/JaninyNobrega/chatbot-fullstack.git
cd chatbot-fullstack

###   🟦 Backend (Django)
#### 2. Criar ambiente virtual
cd backend
python -m venv venv

#### 3. Ativar ambiente virtual
Windows:
cd backend
python -m venv venv
Mac/Linux:
source venv/bin/activate

#### 4. Instalar dependências
pip install -r requirements.txt

#### 5. Rodar migrações
python manage.py migrate

#### 6. Rodar o servidor
python manage.py runserver

---
#   🔐 Acesso ao admin

#### Credenciais incluídas apenas para o avaliador:
Usuário: janinynobrega@gmail.com
Senha: testetecnico

#### Painel:
http://127.0.0.1:8000/admin/

#### Dashboard
http://127.0.0.1:8000/admin/dashboard/

#### Home
http://127.0.0.1:8000/

---
###   🟦 Frontend (React)

#### 1. Instalar dependências
cd ../frontend
npm install

#### 2. Rodar o frontend
npm start

---
#   🧠 Decisões Técnicas
#### 📌 Modelagem (Django)

 O model Message contém:

📋 user → identifica o usuário da conversa  
📋 text → mensagem enviada  
📋 response → resposta automática   
📋 created_at → data/hora   
📋 A modelagem foi mantida simples para refletir apenas o necessário para o desafio. Optei por armazenar como CharField para permitir usuários dinâmicos sem necessidade de tabela separada.    

---
#   📌 Lógica da API

#### O endpoint /api/send/:

✔ Recebe o usuário e a mensagem
✔ Gera resposta personalizada por usuário
✔ Salva no banco via ORM
✔ Retorna JSON serializado
✔ O endpoint /api/history/<user>/:
✔ Filtra mensagens por usuário
✔ Retorna ordem cronológica inversa

###   📌 Frontend (React)

#### Gerenciamento de estado:

✔ useState → guarda mensagens no chat  
✔ useEffect → carrega histórico ao trocar usuário  
✔ activeUser controla qual usuário está usando o chatbot   

#### Navegação:

✏️ React Router DOM para rotas: 
✔  / → Chat    
✔  /historico → Histórico do usuário   

#### Estilização:

✔ Tailwind CSS para design moderno, limpo e responsivo 
✔ Tema baseado em tons de azul, conforme sua preferência   

---
#   ✔️ Tecnologias Utilizadas

🔸Python 3  
🔸Django    
🔸Django REST Framework 
🔸SQLite (ambiente local)   
🔸React 
🔸Tailwind CSS  
🔸Chart.js  
🔸Fetch API 

---
##   👩‍💻 Autora
#### Janiny Nóbrega 
Projeto desenvolvido como parte do processo seletivo da 4blue.