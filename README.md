# 🚀 Api-Node | Gerenciador de Contatos Fullstack

Uma aplicação Fullstack completa que demonstra o poder do **Node.js nativo** no backend e a agilidade do **React com Vite** no frontend. Este projeto foi desenvolvido para gerenciar uma lista de contatos (nome e telefone), unindo uma API robusta a uma interface moderna e reativa.

## 🔗 Demonstração
<img width="1322" height="754" alt="Gravando 2026-05-12 154538" src="https://github.com/user-attachments/assets/a2db0c1a-e7a3-4570-a21e-cbd0b5265b6e" />

## 📋 Sobre o Projeto
O **Api-Node** é um ecossistema de gerenciamento de dados onde o grande diferencial técnico é o uso de **Node.js puro** no servidor, sem o auxílio de frameworks como Express. Isso demonstra um domínio profundo sobre o funcionamento do ambiente de execução JavaScript e do protocolo HTTP. A interface, construída em React, consome essa API de forma assíncrona, oferecendo uma experiência de usuário fluida e sem recarregamentos de página.

### 🛠️ Tecnologias Utilizadas

#### **Backend (Servidor)**
* **Node.js (Nativo)**: Criação de servidor HTTP, gerenciamento de rotas e persistência de dados em memória sem dependências externas.
* **CORS**: Implementação de política de segurança para permitir requisições vindas do frontend.
* **REST Architecture**: Organização dos endpoints seguindo os padrões de métodos HTTP.

#### **Frontend (Interface)**
* **React + Vite**: Estrutura moderna para criação de interfaces baseadas em componentes.
* **Hooks (useState/useEffect)**: Utilizados para gerenciar o estado da lista de contatos e sincronizar com o backend.
* **CSS Moderno**: Design responsivo com foco em usabilidade.

## ✨ Funcionalidades Principais
* **Cadastro de Contatos**: Formulário para adicionar nome e telefone à lista.
* **Listagem Dinâmica**: Exibição em tempo real de todos os contatos registrados na API.
* **Backend Simples e Rápido**: Servidor focado em performance e processamento direto.
* **Design Responsivo**: Interface preparada para celulares, tablets e desktops.

## 📂 Estrutura de Pastas
```text
├── backend/
│   ├── server.js      # Servidor Node.js Nativo
│   └── package.json   # Configurações do servidor
├── frontend/
│   └── frontend/      # Pasta do projeto React/Vite
│       ├── src/       # Componentes e lógica (App.jsx)
│       └── index.html # Entrada da aplicação
└── README.md          # Documentação do projeto

## ▶️ Como Rodar o Projeto

### 📌 Pré-requisitos
Antes de começar, você precisa ter instalado na sua máquina:

- Node.js
- npm

---

## 🚀 Rodando o Backend

Abra o terminal na pasta `backend`:

```bash
cd backend
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor:

```bash
node server.js
```

O backend ficará disponível em:

```text
http://localhost:3000
```

---

## 💻 Rodando o Frontend

Abra outro terminal e entre na pasta do frontend:

```bash
cd frontend/frontend
```

Instale as dependências:

```bash
npm install
```

Inicie o projeto React:

```bash
npm run dev
```

O frontend ficará disponível em:

```text
http://localhost:5173
```

---

## ⚠️ Importante

O backend e o frontend precisam estar rodando ao mesmo tempo para a aplicação funcionar corretamente.
