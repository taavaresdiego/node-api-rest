### Detalhes do Projeto

**NODE API REST

**Descrição:** 
O projeto `Node API Rest` é uma aplicação de API RESTful desenvolvida em Node.js, utilizando Express como framework principal. Esta aplicação se conecta a um banco de dados MongoDB e implementa autenticação via JWT (JSON Web Token). A estrutura do projeto facilita a criação de endpoints para operações CRUD (Create, Read, Update, Delete).

### Dependências Principais
- `bcrypt`: Para hashing de senhas.
- `dotenv`: Para gerenciar variáveis de ambiente.
- `express`: Framework para construção de APIs.
- `jsonwebtoken`: Para geração e verificação de tokens JWT.
- `mongoose`: ODM (Object Data Modeling) para MongoDB.
- `nodemon`: Ferramenta para reiniciar automaticamente o servidor durante o desenvolvimento.

### Scripts Disponíveis
- `start`: Inicia a aplicação.
- `test`: Executa os testes com Jest.
- `dev`: Inicia a aplicação em modo desenvolvimento com Nodemon.

### Passo a Passo para Testar e Rodar a Aplicação

1. **Pré-requisitos:**
   - Node.js instalado.
   - MongoDB em execução.

2. **Clonar o Repositório:**
   ```bash
   git clone https://github.com/taavaresdiego/node-api-rest.git
   cd node-api-rest
   ```

3. **Instalar as Dependências:**
   ```bash
   npm install
   ```

4. **Configurar Variáveis de Ambiente:**
   Crie um arquivo `.env` na raiz do projeto e adicione as variáveis necessárias, por exemplo:
   ```
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/nome-do-banco
   JWT_SECRET=seuSegredoJWT
   ```

5. **Rodar a Aplicação em Modo Desenvolvimento:**
   ```bash
   npm run dev
   ```

6. **Rodar os Testes:**
   ```bash
   npm test
   ```

### Estrutura de Diretórios
```
node-api-rest/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   └── index.js
├── package.json
└── .env.example
```

### Entrypoint da Aplicação
O ponto de entrada da aplicação é o arquivo `src/index.js`, onde o servidor Express é configurado e iniciado.

### Exemplos de Endpoints
- **Criação de Usuário:**
  ```
  POST /api/users
  ```

- **Login:**
  ```
  POST /api/auth/login
  ```

- **Obter Dados do Usuário:**
  ```
  GET /api/users/:id
  ```

Essa estrutura de README fornecerá uma visão geral clara do projeto e instruções detalhadas para configurar, testar e rodar a aplicação.
