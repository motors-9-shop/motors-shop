<h1 align="center">
  <img src="src/assets/logo-outline.svg" alt="Logo Motors Shop" width="400px" >
  <span>FRONT END</span>
  <div>
    <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&labelColor=101010" alt="Logo" />
    <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&labelColor=101010" alt="Logo" />
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&labelColor=101010" alt="Logo" />
    <img src="https://img.shields.io/badge/Chakra_UI-319795?style=flat-square&logo=chakra-ui&labelColor=101010" alt="Logo" />
    <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&labelColor=101010&logoColor=0055FF" alt="Logo" />
    <img src="https://img.shields.io/badge/Hook_Form-EC5990?style=flat-square&logo=react-hook-form&labelColor=101010" alt="Logo" />
    <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&labelColor=101010&logoColor=5A29E4" alt="Logo" />
  </div>
</h1>

<br/>

Simples aplicação e-commerce de compras e vendas online entre usuários. Essa aplicação desenvolve criação, leitura, atualização e deleção de anúncios, usuários, endereços e comentários.

<h2 style="color: #5126EA; font-weight: 600">Rotas</h2>

- <strong style="color: #7076F0;">/</strong> - Página de início
- <strong style="color: #7076F0;">/login</strong> - Página de login de usuário
- <strong style="color: #7076F0;">/signup</strong> - Página de cadastro de usuário
- <strong style="color: #7076F0;">/ads/:id</strong> - Página de um único anúncio
- <strong style="color: #7076F0;">profile/:id</strong> - Página de perfil de um anunciante (Apenas ser for de um anunciante)

<h2 style="color: #5126EA; font-weight: 600">Clonando</h2>

<strong style="color: #7076F0;">Git</strong>

```bash
git clone git@github.com:motors-9-shop/motors-shop.git
```

<strong style="color: #7076F0;">GitHub CLI</strong>

```bash
gh repo clone git@github.com:motors-9-shop/motors-shop.git
```

```bash
gh repo clone motors-9-shop/motors-shop
```

<h2 style="color: #5126EA; font-weight: 600">Executando</h2>

<h3 style="color: #AAA4EE; font-weight: 600">Requisitos</h3>

- Yarn

<h3 style="color: #AAA4EE; font-weight: 600">Localmente</h3>

1. [Siga as instruções de execução do backend](./server/README.md)

2. Crie um arquivo `.env` (ou `.env.local`) na raíz do projeto (`motors-shop`)

3. Copie os campos do arquivo `.env.example` para seu arquivo `.env` passando seus devidos valores

   - `VITE_API_URL`: Url da nossa api, seja local ou não

4. Acesse a raíz do projeto (`motors-shop`) pelo terminal

5. Execute o script de renderização da página:

> ```bash
> yarn dev
> ```

6. Aproveite a aplicação na [porta 5173](http://localhost:5173/) ou se outro programa já estiver utilizando esta porta, o Vite irá informar outra porta a ser utilizada
