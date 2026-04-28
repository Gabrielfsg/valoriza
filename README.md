<h1 align="center">Valoriza API</h1>

<p align="center">
  API REST para registrar elogios entre usuários, com autenticação JWT e classificação por tags.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white"/>
  <img src="https://img.shields.io/badge/TypeORM-FE0902?style=for-the-badge&logo=typeorm&logoColor=white"/>
  <img src="https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white"/>
</p>

## 📋 Sobre o projeto

API construída no bootcamp **Ignite (Rocketseat)** que permite usuários registrarem elogios uns aos outros, classificados por tags. Inclui autenticação via JWT, criptografia de senhas e controle de permissões para administradores.

## 🛠️ Tecnologias

- **Node.js + TypeScript**
- **Express** — servidor HTTP
- **TypeORM** — ORM com migrations
- **SQLite** — banco de dados
- **JWT (jsonwebtoken)** — autenticação
- **bcryptjs** — hash de senhas
- **class-transformer** — serialização de objetos

## ✅ Pré-requisitos

- Node.js 14+
- Yarn ou npm

## 🚀 Como executar

```bash
# Clonar o repositório
git clone https://github.com/Gabrielfsg/valoriza.git
cd valoriza/valoriza_api

# Instalar dependências
yarn install
# ou
npm install

# Rodar as migrations
yarn typeorm migration:run

# Iniciar em modo desenvolvimento
yarn dev
```

A API ficará disponível em `http://localhost:3000`.

## 📁 Estrutura

```
src/
├── controllers/      # Camada HTTP (recebe requisições)
├── services/         # Regras de negócio
├── repositories/     # Acesso a dados
├── entities/         # Entidades do TypeORM (User, Tag, Compliment)
├── middlewares/      # Autenticação e autorização
├── database/         # Conexão e migrations
├── routes.ts         # Definição das rotas
└── server.ts         # Bootstrap do servidor
```

## 🔑 Endpoints principais

- `POST /users` — cadastro de usuário
- `POST /login` — autenticação (retorna JWT)
- `POST /tags` — criação de tag (admin)
- `POST /compliments` — registrar elogio (autenticado)

---

Desenvolvido por [Gabriel Fernandes](https://github.com/Gabrielfsg) durante o bootcamp Ignite da Rocketseat.
