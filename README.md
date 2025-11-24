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

# � Chatbot Fullstack

<p align="center">
  <img src="frontend/public/4blue.jpg" alt="Logo" width="120" style="border-radius:12px" />
</p>

![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=white) ![Python](https://img.shields.io/badge/Python-3.11-blue) ![Django](https://img.shields.io/badge/Django-5.2-green)

Projeto exemplo que integra um backend em Django (API) com um frontend em React (Create React App). O objetivo é demonstrar uma integração simples de chat com persistência no backend e um dashboard administrativo.

## 🔎 Visão rápida

- Backend: Django + Django REST Framework
- Frontend: React (Create React App) com Tailwind CSS
- Banco de dados (dev): SQLite (arquivo `db.sqlite3`)

---

## 📦 Estrutura do repositório

```
chatbot-fullstack/
├─ backend/             # Django project (app: chat)
├─ frontend/            # React app (CRA)
└─ README.md
```

## ⚡ Destaques

- Modelo simples `Message` para armazenar mensagens e respostas.
- Dashboard administrativo integrado ao Django (views/templates em `core/dashboard`).
- Comunicação frontend → backend via fetch/JSON (ver `frontend/src/Chat.js`).

---

## ▶️ Como rodar localmente (Windows / PowerShell)



3. Instalar dependências

pip install -r requirements.txt
# vá para a pasta do backend
cd c:\Users\User\Documents\chatbot-fullstack\backend

# crie e ative um ambiente virtual
python -m venv venv
.\venv\Scripts\Activate.ps1

# (opcional) se houver requirements.txt
pip install -r requirements.txt

# ou instale dependências principais manualmente
pip install django djangorestframework django-cors-headers django-import-export

# aplique migrações e crie superuser
python manage.py migrate
python manage.py createsuperuser

# rode o servidor
python manage.py runserver
```

O backend ficará disponível em `http://127.0.0.1:8000/`.




cd c:\Users\User\Documents\chatbot-fullstack\frontend
npm install
npm start
```

O frontend normalmente abre em `http://localhost:3000/`.

---

## 🔗 Integração e endpoints

- O componente `Chat` envia POST para `http://127.0.0.1:8000/api/send/` (ver `frontend/src/Chat.js`).
- Em `backend/core/settings.py` o CORS está aberto (`CORS_ALLOW_ALL_ORIGINS = True`) para facilitar o desenvolvimento local — lembre-se de restringir isso em produção.

---

## 🧭 Decisões técnicas (resumo)

- Backend (Django):
  - `Message` com campos: `user` (choices), `text`, `response`, `created_at` (auto_now_add). Escolha feita para manter o modelo simples e direto para auditoria e admin.
  - Uso de DRF para endpoints JSON e `django-cors-headers` para desenvolvimento local com frontend separado.
  - Banco: SQLite para dev (fácil setup). Recomenda-se PostgreSQL em produção.

- Frontend (React):
  - Hooks (`useState`, `useEffect`) para gerenciar estado local do chat; solução leve sem Redux devido ao escopo.
  - Assets estáticos estão em `frontend/public/` e podem ser referenciados em componentes via `process.env.PUBLIC_URL` (ex.: logo no `Header.js`).

---

## ✨ Melhorias sugeridas

- Gerar `backend/requirements.txt` com `pip freeze > requirements.txt`.
- Mover assets importantes para `frontend/src/assets` e importar no código para aproveitar otimizações do bundler.
- Adicionar testes automatizados (unit + integration).
- Containerizar a aplicação com Docker para facilitar deploy e testes.

---

## 🛠️ Troubleshooting rápido

- Se não conseguir conectar frontend → backend:
  - Confirme que o backend está rodando em `127.0.0.1:8000`.
  - Confira no console do navegador por erros de CORS ou 404.

- No Windows, se der erro ao ativar venv no PowerShell, rode (uma vez):
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

---

Se quiser, eu posso:

- Gerar automaticamente um `requirements.txt` com as dependências detectadas.
- Mover o logo para `frontend/src/assets` e atualizar o `Header.js` para usar import (melhor para produção).
- Incluir um diagrama simples (mermaid) no README.

---

Obrigado! Se quiser, eu adapto o README com um screenshot real do app (você pode subir em `frontend/public/` ou `docs/`) ou adiciono um GIF demonstrando o fluxo de mensagens.

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