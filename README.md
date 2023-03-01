<h1 align="center">
  <img src="src/assets/logo-outline.svg" alt="Logo Motors Shop" width="400px" >
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

# Rotas

- `/` - Página de início
- `/login` - Página de login de usuário
- `/signup` - Página de cadastro de usuário
- `/ads/:id` - Página de um único anúncio
- `profile/:id` - Página de perfil de um anunciante (Apenas ser for de um anunciante)

# Clonando

_Git_

```bash
git clone git@github.com:motors-9-shop/motors-shop.git
```

_GitHub CLI_

```bash
gh repo clone git@github.com:motors-9-shop/motors-shop.git
```

```bash
gh repo clone motors-9-shop/motors-shop
```

# Executando

## Requisitos

- Yarn

## Localmente

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
