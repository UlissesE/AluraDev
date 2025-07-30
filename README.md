# AluraDev

AluraDev é uma plataforma web de compartilhamento, visualização e destaque de códigos, inspirada em comunidades de programação. O projeto foi desenvolvido com foco em organização, modularização e experiência de usuário, utilizando HTML, CSS modularizado e JavaScript moderno. 
O objetivo deste projeto foi treinar HTML, CSS e JavaScript.

## Recursos

- **Editor de Código:** Escreva e destaque seus códigos com facilidade.
- **Customização:** Escolha a cor do bloco de código para personalizar seus posts.
- **Busca Instantânea:** Pesquise projetos por nome, descrição ou linguagem.
- **Listagem de Projetos:** Veja os códigos compartilhados pela comunidade em tempo real.
- **Formulário de Cadastro:** Adicione nome, descrição, linguagem e cor ao seu projeto.
- **Design Responsivo:** Interface moderna e adaptável.
- **Backend Simples:** Utiliza [json-server](https://github.com/typicode/json-server) para simular uma API REST.

## Estrutura de Pastas

```
src/
  backend/
    codes.json           # Base de dados simulada para os códigos
  css/
    aside.css
    header.css
    main.css
    nav.css
    reset.css
    style.css
  imgs/
    ...                  # Imagens e ícones do projeto
  javascript/
    api.js
    comunity.js
    main.js
    ui.js
  pages/
    comunity.html
index.html
```

## Como iniciar o projeto

### 1. Instale o Node.js

É necessário ter o [Node.js](https://nodejs.org/) instalado em sua máquina para instalar as dependências e rodar o backend.

### 2. Clone o repositório

```bash
git clone https://github.com/UlissesE/AluraDev.git
cd AluraDev
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie o backend (json-server)

O backend simula uma API REST para os códigos, usando o arquivo `src/backend/codes.json` como banco de dados.

```bash
npm start
```
> Isso irá rodar o json-server em `http://localhost:3000`.

### 5. Inicie o frontend

Basta abrir o arquivo `index.html` no seu navegador (recomenda-se usar uma extensão de servidor local, como Live Server, para evitar problemas de CORS).

- Página principal: `index.html`
- Página da comunidade: `src/pages/comunity.html`

## Observações

- O projeto é totalmente modularizado, com CSS separado por áreas (`header`, `nav`, `main`, `aside`).
- Para persistência real dos dados, seria necessário adaptar o backend.

## Tecnologias Utilizadas

- HTML5
- CSS3 (modularizado)
- JavaScript (ES6+)
- [Axios](https://axios-http.com/) para requisições HTTP
- [json-server](https://github.com/typicode/json-server) para simular o backend
- [Node.js](https://nodejs.org/) para gerenciamento de dependências e execução do backend

Feito com 💙 para a comunidade dev!
