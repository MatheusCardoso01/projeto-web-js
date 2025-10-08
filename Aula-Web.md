# 📚 CURSO DE DESENVOLVIMENTO WEB COM JAVASCRIPT

---

## 📋 ÍNDICE GERAL

### 🌍 [AULA 1: PROTOCOLOS WEB](#-aula-1-protocolos-web)
- [📡 O que são Protocolos?](#-o-que-são-protocolos)
- [Principais Protocolos Web](#principais-protocolos-web)
  - [🌐 HTTP (HyperText Transfer Protocol)](#-http-hypertext-transfer-protocol)
  - [🔒 HTTPS (HTTP Secure)](#-https-http-secure)  
  - [📧 SMTP (Simple Mail Transfer Protocol)](#-smtp-simple-mail-transfer-protocol)
  - [🔄 TCP (Transmission Control Protocol)](#-tcp-transmission-control-protocol)
- [Como Funcionam na Prática](#como-funcionam-na-prática)
- [Outros Protocolos Importantes](#outros-protocolos-importantes)

### 🚀 [AULA 2: MÉTODOS HTTP NA PROGRAMAÇÃO](#-aula-2-métodos-http-na-programação)
- [📝 Métodos HTTP na Programação](#-métodos-http-na-programação)
  - [📊 Resumo dos Métodos](#-resumo-dos-métodos)
  - [📝 Principais Métodos HTTP](#-principais-métodos-http)
  - [🔍 Métodos Menos Comuns](#-métodos-menos-comuns)
  - [🎯 Exemplo CRUD Completo](#-exemplo-crud-completo)

### 🌐 [AULA 3: URLs E ENDEREÇAMENTO WEB](#-aula-3-urls-e-endereçamento-web)
- [📍 URLs (Uniform Resource Locator)](#-urls-uniform-resource-locator)
  - [O que é uma URL?](#o-que-é-uma-url)
  - [🏗️ Anatomia de uma URL](#️-anatomia-de-uma-url)
  - [📝 Exemplos Práticos](#-exemplos-práticos)
  - [🛠️ Manipulando URLs em JavaScript](#️-manipulando-urls-em-javascript)
  - [🎯 Boas Práticas para URLs](#-boas-práticas-para-urls)
  - [📊 Códigos de Status HTTP para URLs](#-códigos-de-status-http-para-urls)
  - [🔐 Segurança em URLs](#-segurança-em-urls)

### 📄 [AULA 4: INTRODUÇÃO AO HTML](#-aula-4-introdução-ao-html)
- [🌟 O que é HTML?](#-o-que-é-html)
  - [🎯 Características Principais](#-características-principais)
- [🏗️ Estrutura Básica do HTML](#️-estrutura-básica-do-html)
  - [Documento HTML Mínimo](#documento-html-mínimo)
  - [🔍 Anatomia de uma Tag HTML](#-anatomia-de-uma-tag-html)
- [📋 Componentes Fundamentais](#-componentes-fundamentais)
  - [1. DOCTYPE](#1-doctype)
  - [2. Elemento HTML](#2-elemento-html)
  - [3. HEAD (Cabeçalho)](#3-head-cabeçalho)
  - [4. BODY (Corpo)](#4-body-corpo)
- [🎨 Elementos de Texto Básicos](#-elementos-de-texto-básicos)
  - [Títulos (Headings)](#títulos-headings)
  - [Parágrafos e Texto](#parágrafos-e-texto)
- [🔗 Links e Navegação](#-links-e-navegação)
  - [Links Básicos](#links-básicos)
- [📋 Listas](#-listas)
  - [Lista Não Ordenada](#lista-não-ordenada)
  - [Lista Ordenada](#lista-ordenada)
  - [Lista de Definição](#lista-de-definição)
- [🖼️ Imagens e Mídia](#️-imagens-e-mídia)
  - [Imagens](#imagens)
- [📊 Tabelas Simples](#-tabelas-simples)
  - [Estrutura Básica](#estrutura-básica)
- [📝 Formulários Básicos](#-formulários-básicos)
  - [Formulário Simples](#formulário-simples)
- [🎯 Semântica HTML5](#-semântica-html5)
  - [Elementos Semânticos](#elementos-semânticos)
- [✅ Boas Práticas HTML](#-boas-práticas-html)
  - [1. Sempre use DOCTYPE HTML5](#1-sempre-use-doctype-html5)
  - [2. Estrutura semântica](#2-estrutura-semântica)
  - [3. Atributos alt em imagens](#3-atributos-alt-em-imagens)
  - [4. Labels nos formulários](#4-labels-nos-formulários)
  - [5. Indentação consistente](#5-indentação-consistente)
- [🔧 Ferramentas Úteis](#-ferramentas-úteis)
  - [Validação HTML](#validação-html)
  - [Emmet no VS Code](#emmet-no-vs-code)

### 🌳 [AULA 5: DOM (DOCUMENT OBJECT MODEL)](#-aula-5-dom-document-object-model)
- [📋 Resumo Teórico](#-resumo-teórico)
- [🎯 O que é o DOM?](#-o-que-é-o-dom)
  - [📖 Definição Conceitual](#-definição-conceitual)
- [🏗️ Estrutura Hierárquica do DOM](#️-estrutura-hierárquica-do-dom)
  - [Representação Visual da Árvore DOM](#representação-visual-da-árvore-dom)
  - [Exemplo HTML → Estrutura DOM](#exemplo-html--estrutura-dom)
- [🔍 Tipos de Nós no DOM](#-tipos-de-nós-no-dom)
  - [1. Element Node (Nó Elemento)](#1-element-node-nó-elemento)
  - [2. Text Node (Nó Texto)](#2-text-node-nó-texto)
  - [3. Attribute Node (Nó Atributo)](#3-attribute-node-nó-atributo)
  - [4. Comment Node (Nó Comentário)](#4-comment-node-nó-comentário)
- [🌐 O Objeto `document`](#-o-objeto-document)
  - [O que é o `document`?](#o-que-é-o-document)
  - [Informações sobre o Document](#informações-sobre-o-document)
- [🎯 Selecionando Elementos no DOM](#-selecionando-elementos-no-dom)
  - [Métodos de Seleção](#métodos-de-seleção)
  - [Comparação dos Métodos](#comparação-dos-métodos)
- [🔗 Relacionamentos entre Nós](#-relacionamentos-entre-nós)
  - [Navegação na Árvore DOM](#navegação-na-árvore-dom)
  - [Exemplo Visual de Relacionamentos](#exemplo-visual-de-relacionamentos)
- [📊 Propriedades Importantes dos Elementos](#-propriedades-importantes-dos-elementos)
  - [Conteúdo dos Elementos](#conteúdo-dos-elementos)
  - [Atributos dos Elementos](#atributos-dos-elementos)
  - [Estilo e Classes CSS](#estilo-e-classes-css)
- [🧠 Conceitos Fundamentais para Entender](#-conceitos-fundamentais-para-entender)
  - [1. DOM é uma API](#1-dom-é-uma-api)
  - [2. DOM é Dinâmico](#2-dom-é-dinâmico)
  - [3. DOM vs HTML Source](#3-dom-vs-html-source)
  - [4. Performance](#4-performance)
  - [5. DOM Ready vs Window Load](#5-dom-ready-vs-window-load)
- [🎯 Casos de Uso Práticos do DOM](#-casos-de-uso-práticos-do-dom)
  - [Exemplo 1: Informações da Página](#exemplo-1-informações-da-página)
  - [Exemplo 2: Encontrar Elementos Específicos](#exemplo-2-encontrar-elementos-específicos)
  - [Exemplo 3: Análise da Estrutura](#exemplo-3-análise-da-estrutura)
- [💡 Conceitos Avançados (Introdução)](#-conceitos-avançados-introdução)
  - [Event Bubbling e Capturing](#event-bubbling-e-capturing)
  - [Live Collections vs Static Collections](#live-collections-vs-static-collections)
  - [DocumentFragment](#documentfragment)
- [🎯 Por que o DOM é Importante?](#-por-que-o-dom-é-importante)
- [📚 Resumo dos Conceitos-Chave](#-resumo-dos-conceitos-chave)
  - [O que Aprendemos:](#o-que-aprendemos)
  - [Próximos Passos:](#próximos-passos)

---

# 🌍 AULA 1: PROTOCOLOS WEB

---

## 📡 O que são Protocolos?

Um **protocolo** é um conjunto de regras que define como os computadores se comunicam através da rede. É como um "idioma comum" que permite a troca de informações entre diferentes sistemas.

## Principais Protocolos Web

### 🌐 HTTP (HyperText Transfer Protocol)
- **Função**: Transferência de arquivos, imagens, páginas web e dados
- **Porta padrão**: 80
- **Uso**: Navegação web, APIs REST, download de recursos
- É o protocolo que permite acessarmos sites na internet

### 🔒 HTTPS (HTTP Secure)
- **Função**: Versão segura do HTTP com criptografia
- **Porta padrão**: 443
- **Uso**: Sites seguros, transações bancárias, dados sensíveis

### 📧 SMTP (Simple Mail Transfer Protocol)
- **Função**: Envio de emails
- **Porta padrão**: 25, 587 ou 465
- **Uso**: Servidores de email para entrega de mensagens

### 🔄 TCP (Transmission Control Protocol)
- **Função**: Protocolo de transporte confiável
- **Características**: 
  - Garante entrega dos dados
  - Controle de ordem das mensagens
  - Detecção e correção de erros

## Como Funcionam na Prática

```
Cliente (Navegador) ──HTTP──> Servidor Web
                   <──HTML──  
```

> **Exemplo**: Quando você digita `www.google.com`, seu navegador usa o protocolo HTTP/HTTPS para solicitar a página ao servidor do Google.

## Outros Protocolos Importantes

| Protocolo | Função                    | Porta |
| --------- | ------------------------- | ----- |
| **FTP**   | Transferência de arquivos | 21    |
| **SSH**   | Acesso remoto seguro      | 22    |
| **DNS**   | Resolução de nomes        | 53    |
| **POP3**  | Recebimento de emails     | 110   |
| **IMAP**  | Gerenciamento de emails   | 143   |

---

# 🚀 AULA 2: MÉTODOS HTTP NA PROGRAMAÇÃO

---

## 📝 Métodos HTTP na Programação

### 📊 Resumo dos Métodos

| Método      | Ação       | Seguro* | Idempotente** | Tem Corpo |
| ----------- | ---------- | ------- | ------------- | --------- |
| **GET**     | Buscar     | ✅       | ✅             | ❌         |
| **POST**    | Criar      | ❌       | ❌             | ✅         |
| **PUT**     | Substituir | ❌       | ✅             | ✅         |
| **PATCH**   | Atualizar  | ❌       | ❌             | ✅         |
| **DELETE**  | Remover    | ❌       | ✅             | ❌         |
| **HEAD**    | Metadados  | ✅       | ✅             | ❌         |
| **OPTIONS** | Opções     | ✅       | ✅             | ❌         |

> **Seguro***: Não modifica dados no servidor  
> **Idempotente**: Múltiplas execuções têm o mesmo resultado

### 📝 Principais Métodos HTTP

#### 🔍 GET
- **Função**: Solicitar/buscar dados do servidor
- **Características**: 
  - Não modifica dados
  - Pode ser cacheado
  - Parâmetros na URL
  - Idempotente (pode repetir sem problemas)

```javascript
// Exemplo GET
fetch('https://api.exemplo.com/usuarios')
  .then(response => response.json())
  .then(data => console.log(data));
```

#### 📤 POST
- **Função**: Enviar dados para criar novos recursos
- **Características**: 
  - Modifica dados no servidor
  - Dados no corpo da requisição
  - Não é idempotente

```javascript
// Exemplo POST
fetch('https://api.exemplo.com/usuarios', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    nome: 'João',
    email: 'joao@email.com'
  })
});
```

#### ✏️ PUT
- **Função**: Atualizar/substituir recurso completo
- **Características**: 
  - Substitui todo o recurso
  - Idempotente
  - Deve incluir todos os campos

```javascript
// Exemplo PUT
fetch('https://api.exemplo.com/usuarios/123', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    nome: 'João Silva',
    email: 'joao.silva@email.com',
    idade: 30
  })
});
```

#### 🔧 PATCH
- **Função**: Atualização parcial de recurso
- **Características**: 
  - Modifica apenas campos específicos
  - Mais eficiente que PUT
  - Não precisa enviar todos os dados

```javascript
// Exemplo PATCH
fetch('https://api.exemplo.com/usuarios/123', {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: 'novo.email@exemplo.com'
  })
});
```

#### 🗑️ DELETE
- **Função**: Remover recurso do servidor
- **Características**: 
  - Remove dados
  - Idempotente
  - Pode não ter corpo na requisição

```javascript
// Exemplo DELETE
fetch('https://api.exemplo.com/usuarios/123', {
  method: 'DELETE'
});
```

### 🔍 Métodos Menos Comuns

#### HEAD
- **Função**: Igual ao GET, mas retorna apenas os cabeçalhos
- **Uso**: Verificar se recurso existe, obter metadados

#### OPTIONS
- **Função**: Descobrir quais métodos são suportados
- **Uso**: CORS preflight, descoberta de API

### 🎯 Exemplo CRUD Completo

```javascript
// CREATE (POST)
const criarUsuario = async (dados) => {
  const response = await fetch('/api/usuarios', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados)
  });
  return response.json();
};

// READ (GET)
const buscarUsuarios = async () => {
  const response = await fetch('/api/usuarios');
  return response.json();
};

// UPDATE (PUT/PATCH)
const atualizarUsuario = async (id, dados) => {
  const response = await fetch(`/api/usuarios/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados)
  });
  return response.json();
};

// DELETE (DELETE)
const removerUsuario = async (id) => {
  const response = await fetch(`/api/usuarios/${id}`, {
    method: 'DELETE'
  });
  return response.ok;
};
```

---

# 🌐 AULA 3: URLs E ENDEREÇAMENTO WEB

---

## 📍 URLs (Uniform Resource Locator)

### O que é uma URL?

Uma **URL** é o endereço único que identifica um recurso na internet. É como o "endereço postal" de uma página web, arquivo ou API.

### 🏗️ Anatomia de uma URL

```
https://www.exemplo.com:443/usuarios/123?nome=joao&idade=30#perfil
└───┘   └─────────────┘└─┘└──────────┘└─────────────────┘└─────┘
  │            │        │        │              │           │
Protocolo   Domínio   Porta    Path       Query String   Fragment
```

#### 🔍 Componentes Detalhados

##### 1. **Protocolo (Scheme)**
```
http://     → Protocolo não seguro
https://    → Protocolo seguro (SSL/TLS)
ftp://      → Transferência de arquivos
file://     → Arquivo local
```

##### 2. **Domínio (Host)**
```
www.google.com          → Domínio completo
192.168.1.1            → Endereço IP
localhost              → Máquina local
api.exemplo.com        → Subdomínio
```

##### 3. **Porta (Port)**
```
:80      → HTTP padrão (opcional)
:443     → HTTPS padrão (opcional)
:3000    → Desenvolvimento local
:8080    → Servidor alternativo
```

##### 4. **Caminho (Path)**
```
/usuarios              → Lista de usuários
/usuarios/123          → Usuário específico
/api/v1/posts         → Versão da API
/assets/images/logo.png → Arquivo específico
```

##### 5. **Query String (Parâmetros)**
```
?nome=joao             → Um parâmetro
?nome=joao&idade=30    → Múltiplos parâmetros
?q=javascript&page=2   → Busca com paginação
?filter[]=ativo&sort=nome → Arrays e objetos
```

##### 6. **Fragment (Âncora)**
```
#topo                  → Seção da página
#usuario-123          → Elemento específico
#/dashboard           → Roteamento SPA
```

### 📝 Exemplos Práticos

#### URLs de APIs REST
```javascript
// Listar todos os usuários
GET https://api.exemplo.com/usuarios

// Buscar usuário específico  
GET https://api.exemplo.com/usuarios/123

// Buscar com filtros
GET https://api.exemplo.com/usuarios?ativo=true&cidade=saopaulo

// API versionada
GET https://api.exemplo.com/v2/posts?limit=10&offset=20
```

#### URLs com Parâmetros Complexos
```javascript
// Busca avançada
https://loja.com/produtos?categoria=eletrônicos&preco_min=100&preco_max=500&ordenar=preco_asc

// Filtros múltiplos
https://api.com/usuarios?roles[]=admin&roles[]=editor&status=ativo

// Paginação
https://api.com/posts?page=3&per_page=15&sort=created_at&order=desc
```

### 🛠️ Manipulando URLs em JavaScript

#### Criando URLs
```javascript
// Usando template strings
const userId = 123;
const url = `https://api.exemplo.com/usuarios/${userId}`;

// Usando URL constructor
const baseUrl = 'https://api.exemplo.com';
const url = new URL(`/usuarios/${userId}`, baseUrl);

// Adicionando parâmetros
const url = new URL('https://api.exemplo.com/usuarios');
url.searchParams.set('page', '2');
url.searchParams.set('limit', '10');
// Resultado: https://api.exemplo.com/usuarios?page=2&limit=10
```

#### Decompondo URLs
```javascript
const url = new URL('https://api.exemplo.com:443/usuarios/123?ativo=true#perfil');

console.log(url.protocol);   // "https:"
console.log(url.hostname);   // "api.exemplo.com"
console.log(url.port);       // "443"
console.log(url.pathname);   // "/usuarios/123"
console.log(url.search);     // "?ativo=true"
console.log(url.hash);       // "#perfil"

// Acessar parâmetros
console.log(url.searchParams.get('ativo')); // "true"
```

#### Construindo Query Strings
```javascript
// Método manual
const params = {
  nome: 'João Silva',
  idade: 30,
  ativo: true
};

// Usando URLSearchParams
const queryString = new URLSearchParams(params).toString();
// Resultado: "nome=Jo%C3%A3o+Silva&idade=30&ativo=true"

// Usando com fetch
const url = `https://api.exemplo.com/usuarios?${queryString}`;
fetch(url);
```

### 🎯 Boas Práticas para URLs

#### ✅ **URLs Bem Estruturadas**
```
✅ https://api.loja.com/v1/produtos/123
✅ https://blog.com/2024/artigos/javascript-basico
✅ https://api.com/usuarios?page=2&limit=10
```

#### ❌ **URLs Mal Estruturadas**  
```
❌ https://site.com/page.php?id=123&action=view&type=user
❌ https://api.com/getData?method=getUserById&userId=123
❌ https://loja.com/categoria1/subcategoria2/produto123/detalhes/info
```

### 📊 Códigos de Status HTTP para URLs

| Código  | Significado       | Quando Usar                 |
| ------- | ----------------- | --------------------------- |
| **200** | OK                | Recurso encontrado          |
| **201** | Created           | Recurso criado              |
| **404** | Not Found         | URL não existe              |
| **400** | Bad Request       | URL malformada              |
| **301** | Moved Permanently | URL mudou definitivamente   |
| **302** | Found             | Redirecionamento temporário |

### 🔐 Segurança em URLs

#### Cuidados Importantes
```javascript
// ❌ NUNCA faça isso - dados sensíveis na URL
https://api.com/login?usuario=admin&senha=123456

// ✅ Use POST com dados no corpo
fetch('https://api.com/login', {
  method: 'POST',
  body: JSON.stringify({ usuario: 'admin', senha: '***' })
});

// ✅ Escape parâmetros para evitar injection
const termo = encodeURIComponent(userInput);
const url = `https://api.com/buscar?q=${termo}`;
```

---

# 📄 AULA 4: INTRODUÇÃO AO HTML

---

## 🌟 O que é HTML?

**HTML** (HyperText Markup Language) é a linguagem de marcação padrão para criar páginas web. É a base estrutural de todo site na internet.

### 🎯 Características Principais
- **Linguagem de marcação** (não de programação)
- **Estrutura semântica** do conteúdo
- **Interpretado pelos navegadores**
- **Base para CSS e JavaScript**

## 🏗️ Estrutura Básica do HTML

### Documento HTML Mínimo
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minha Primeira Página</title>
</head>
<body>
    <h1>Olá, Mundo!</h1>
    <p>Este é meu primeiro documento HTML.</p>
</body>
</html>
```

### 🔍 Anatomia de uma Tag HTML
```html
<tagname atributo="valor">Conteúdo</tagname>
└─────┘ └──────────────┘└───────┘└────────┘
   │           │            │        │
 Nome      Atributo    Conteúdo   Fechamento
```

## 📋 Componentes Fundamentais

### 1. **DOCTYPE**
```html
<!DOCTYPE html>
```
- Declara que é um documento HTML5
- **Sempre** deve ser a primeira linha
- Não é uma tag HTML

### 2. **Elemento HTML**
```html
<html lang="pt-br">
    <!-- Todo conteúdo aqui -->
</html>
```
- **Elemento raiz** do documento
- Atributo `lang` especifica o idioma

### 3. **HEAD (Cabeçalho)**
```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Título da Página</title>
    <meta name="description" content="Descrição da página">
</head>
```
- **Metadados** do documento
- **Não visível** ao usuário
- Links para CSS, scripts, etc.

### 4. **BODY (Corpo)**
```html
<body>
    <!-- Conteúdo visível da página -->
    <h1>Título Principal</h1>
    <p>Parágrafo de texto.</p>
</body>
```
- **Conteúdo visível** da página
- Tudo que o usuário vê

## 🎨 Elementos de Texto Básicos

### Títulos (Headings)
```html
<h1>Título Nível 1 - Mais Importante</h1>
<h2>Título Nível 2</h2>
<h3>Título Nível 3</h3>
<h4>Título Nível 4</h4>
<h5>Título Nível 5</h5>
<h6>Título Nível 6 - Menos Importante</h6>
```

### Parágrafos e Texto
```html
<p>Este é um parágrafo normal.</p>
<p>Este é outro parágrafo com <strong>texto em negrito</strong> 
   e <em>texto em itálico</em>.</p>
<br> <!-- Quebra de linha -->
<hr> <!-- Linha horizontal -->
```

## 🔗 Links e Navegação

### Links Básicos
```html
<!-- Link externo -->
<a href="https://www.google.com">Ir para Google</a>

<!-- Link interno (mesma página) -->
<a href="#secao1">Ir para Seção 1</a>

<!-- Link para email -->
<a href="mailto:contato@exemplo.com">Enviar Email</a>

<!-- Link que abre em nova aba -->
<a href="https://github.com" target="_blank">GitHub</a>
```

## 📋 Listas

### Lista Não Ordenada
```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
```

### Lista Ordenada
```html
<ol>
    <li>Primeiro item</li>
    <li>Segundo item</li>
    <li>Terceiro item</li>
</ol>
```

### Lista de Definição
```html
<dl>
    <dt>HTML</dt>
    <dd>Linguagem de marcação para páginas web</dd>
    <dt>CSS</dt>
    <dd>Linguagem de estilos para páginas web</dd>
</dl>
```

## 🖼️ Imagens e Mídia

### Imagens
```html
<!-- Imagem básica -->
<img src="imagem.jpg" alt="Descrição da imagem">

<!-- Imagem com dimensões -->
<img src="logo.png" alt="Logo da empresa" width="200" height="100">

<!-- Imagem responsiva -->
<img src="foto.jpg" alt="Foto" style="max-width: 100%; height: auto;">
```

## 📊 Tabelas Simples

### Estrutura Básica
```html
<table>
    <thead>
        <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Cidade</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>João</td>
            <td>25</td>
            <td>São Paulo</td>
        </tr>
        <tr>
            <td>Maria</td>
            <td>30</td>
            <td>Rio de Janeiro</td>
        </tr>
    </tbody>
</table>
```

## 📝 Formulários Básicos

### Formulário Simples
```html
<form action="/processar" method="POST">
    <label for="nome">Nome:</label>
    <input type="text" id="nome" name="nome" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <button type="submit">Enviar</button>
</form>
```

## 🎯 Semântica HTML5

### Elementos Semânticos
```html
<header>Cabeçalho da página</header>
<nav>Menu de navegação</nav>
<main>
    <section>
        <article>
            <h2>Título do Artigo</h2>
            <p>Conteúdo do artigo...</p>
        </article>
    </section>
    <aside>Barra lateral</aside>
</main>
<footer>Rodapé da página</footer>
```

## ✅ Boas Práticas HTML

### **1. Sempre use DOCTYPE HTML5**
```html
<!DOCTYPE html>
```

### **2. Estrutura semântica**
```html
<!-- ✅ Bom -->
<header>, <main>, <section>, <article>, <footer>

<!-- ❌ Ruim -->
<div class="header">, <div class="content">
```

### **3. Atributos alt em imagens**
```html
<!-- ✅ Sempre inclua -->
<img src="foto.jpg" alt="Descrição significativa">
```

### **4. Labels nos formulários**
```html
<!-- ✅ Acessibilidade -->
<label for="campo">Texto:</label>
<input type="text" id="campo" name="campo">
```

### **5. Indentação consistente**
```html
<div>
    <h1>Título</h1>
    <p>Parágrafo dentro da div.</p>
</div>
```

## 🔧 Ferramentas Úteis

### **Validação HTML**
- [W3C Markup Validator](https://validator.w3.org/)
- Extensão HTML Validate no VS Code

### **Emmet no VS Code**
```
html:5    → Estrutura HTML5 completa
div>p*3   → Div com 3 parágrafos
ul>li*5   → Lista com 5 itens
```

---

# 🌳 AULA 5: DOM (DOCUMENT OBJECT MODEL)

---

## 📋 Resumo Teórico

<div align="justify">
O Document Object Model (DOM) representa um dos conceitos fundamentais do desenvolvimento web moderno, constituindo a ponte essencial entre documentos HTML estáticos e aplicações web dinâmicas e interativas. Conceitualmente, o DOM funciona como uma interface de programação que transforma a estrutura hierárquica de um documento HTML em uma representação orientada a objetos, permitindo que linguagens de programação, especialmente JavaScript, possam acessar, modificar e manipular elementos da página de forma programática. Esta transformação cria uma árvore de nós onde cada elemento HTML, atributo, texto e comentário torna-se um objeto com propriedades e métodos específicos. A compreensão teórica do DOM é crucial para entender como navegadores interpretam documentos web e como desenvolvedores podem criar experiências interativas, pois ele estabelece as regras e estruturas que governam a manipulação dinâmica de conteúdo, permitindo desde simples alterações de texto até complexas animações e funcionalidades de aplicações web modernas. Através do DOM, desenvolvedores ganham controle total sobre a apresentação e comportamento de páginas web, transformando documentos estáticos em interfaces responsivas e funcionalmente ricas.
</div>

---

## 🎯 O que é o DOM?

**DOM** (Document Object Model) é uma representação estrutural do documento HTML/XML em forma de **árvore de objetos** que o JavaScript pode acessar e manipular.

### 📖 Definição Conceitual

O DOM é como uma **tradução** que o navegador faz do seu HTML, transformando cada elemento em um **objeto JavaScript** que pode ser programaticamente manipulado.

**Analogia simples**: Se o HTML é como um "texto estático", o DOM é como uma "versão interativa e programável" desse texto.

## 🏗️ Estrutura Hierárquica do DOM

### Representação Visual da Árvore DOM

```
Document
└── html
    ├── head
    │   ├── title
    │   └── meta
    └── body
        ├── header
        │   └── h1 (texto: "Título")
        ├── main
        │   ├── p (texto: "Parágrafo")
        │   └── div
        │       └── button (texto: "Clique")
        └── footer
```

### Exemplo HTML → Estrutura DOM

**HTML Original:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Minha Página</title>
</head>
<body>
    <header>
        <h1>Bem-vindo</h1>
    </header>
    <main>
        <p>Este é um parágrafo.</p>
        <div>
            <button>Clique aqui</button>
        </div>
    </main>
</body>
</html>
```

**Como o DOM representa:**
- Cada tag HTML se torna um **nó (node)**
- Cada nó tem **propriedades** e **métodos**
- Os nós têm **relacionamentos** (pai, filho, irmão)
- O texto dentro das tags também são **nós de texto**

## 🔍 Tipos de Nós no DOM

### 1. **Element Node (Nó Elemento)**
```javascript
// Representa tags HTML
<div>    // Element Node
<p>      // Element Node  
<button> // Element Node
```

### 2. **Text Node (Nó Texto)**
```javascript
<p>Este texto é um Text Node</p>
//  ↑ Texto dentro da tag é um nó separado
```

### 3. **Attribute Node (Nó Atributo)**
```javascript
<div id="container" class="main">
//    ↑ id e class são Attribute Nodes
```

### 4. **Comment Node (Nó Comentário)**
```javascript
<!-- Este é um Comment Node -->
```

## 🌐 O Objeto `document`

### O que é o `document`?

O **`document`** é o **ponto de entrada** para acessar todo o DOM. É um objeto global que representa todo o documento HTML.

**Propriedades principais:**
- `document.documentElement` → Tag `<html>`
- `document.head` → Tag `<head>`
- `document.body` → Tag `<body>`
- `document.title` → Conteúdo da tag `<title>`

### Informações sobre o Document

```javascript
// Informações básicas
console.log(document.title);        // Título da página
console.log(document.URL);          // URL atual
console.log(document.domain);       // Domínio do site
console.log(document.readyState);   // Estado do carregamento

// Acessos diretos
console.log(document.head);         // Elemento <head>
console.log(document.body);         // Elemento <body>
console.log(document.documentElement); // Elemento <html>
```

## 🎯 Selecionando Elementos no DOM

### Métodos de Seleção

#### **1. Por ID (Único)**
```javascript
// Seleciona elemento com id="meuId"
const elemento = document.getElementById('meuId');

// Exemplo HTML: <div id="container">Conteúdo</div>
const container = document.getElementById('container');
```

#### **2. Por Classe (Múltiplos)**
```javascript
// Retorna uma HTMLCollection (lista de elementos)
const elementos = document.getElementsByClassName('minhaClasse');

// Exemplo: acessar o primeiro elemento
const primeiro = elementos[0];
```

#### **3. Por Tag (Múltiplos)**
```javascript
// Seleciona todos os parágrafos
const paragrafos = document.getElementsByTagName('p');

// Seleciona todas as divs
const divs = document.getElementsByTagName('div');
```

#### **4. Query Selector (Moderno e Flexível)**
```javascript
// Seleciona o PRIMEIRO elemento que corresponde ao seletor CSS
const elemento = document.querySelector('.classe');
const botao = document.querySelector('#meuBotao');
const paragrafo = document.querySelector('p');

// Seleciona TODOS os elementos que correspondem
const elementos = document.querySelectorAll('.classe');
const todosPs = document.querySelectorAll('p');
```

### Comparação dos Métodos

| Método | Retorna | Uso |
|--------|---------|-----|
| `getElementById` | Elemento único | Quando você sabe o ID específico |
| `getElementsByClassName` | HTMLCollection | Múltiplos elementos por classe |
| `getElementsByTagName` | HTMLCollection | Todos elementos de uma tag |
| `querySelector` | Primeiro elemento | Seletor CSS flexível |
| `querySelectorAll` | NodeList | Todos elementos que correspondem |

## 🔗 Relacionamentos entre Nós

### Navegação na Árvore DOM

```javascript
const elemento = document.getElementById('meuElemento');

// Navegação familiar
console.log(elemento.parentNode);    // Elemento pai
console.log(elemento.childNodes);    // Todos os filhos (inclui texto)
console.log(elemento.children);      // Só elementos filhos
console.log(elemento.firstChild);    // Primeiro filho (pode ser texto)
console.log(elemento.firstElementChild); // Primeiro elemento filho
console.log(elemento.lastChild);     // Último filho
console.log(elemento.lastElementChild);  // Último elemento filho

// Navegação entre irmãos
console.log(elemento.nextSibling);        // Próximo irmão (pode ser texto)
console.log(elemento.nextElementSibling); // Próximo elemento irmão
console.log(elemento.previousSibling);    // Irmão anterior
console.log(elemento.previousElementSibling); // Elemento irmão anterior
```

### Exemplo Visual de Relacionamentos

**HTML:**
```html
<div id="container">
    <h2>Título</h2>
    <p>Parágrafo 1</p>
    <p>Parágrafo 2</p>
    <div>Div filha</div>
</div>
```

**Navegação:**
```javascript
const container = document.getElementById('container');
const h2 = container.firstElementChild;     // <h2>
const p1 = h2.nextElementSibling;           // Primeiro <p>
const p2 = p1.nextElementSibling;           // Segundo <p>
const divFilha = p2.nextElementSibling;     // <div>

// Verificar relacionamentos
console.log(p1.parentNode === container);   // true
console.log(container.children.length);     // 4 (h2, p, p, div)
```

## 📊 Propriedades Importantes dos Elementos

### Conteúdo dos Elementos

```javascript
const elemento = document.getElementById('meuElemento');

// Diferentes formas de acessar conteúdo
console.log(elemento.innerHTML);    // HTML interno (com tags)
console.log(elemento.innerText);    // Texto visível (sem tags)
console.log(elemento.textContent);  // Todo texto (mesmo oculto)

// Exemplo prático
// HTML: <p>Este é um <strong>texto importante</strong></p>
console.log(elemento.innerHTML);    // "Este é um <strong>texto importante</strong>"
console.log(elemento.innerText);    // "Este é um texto importante"
console.log(elemento.textContent);  // "Este é um texto importante"
```

### Atributos dos Elementos

```javascript
// Acessar e modificar atributos
console.log(elemento.id);           // Valor do atributo id
console.log(elemento.className);    // Valor do atributo class
console.log(elemento.getAttribute('data-info')); // Atributo customizado

// Verificar existência
console.log(elemento.hasAttribute('id')); // true/false

// Listar todos os atributos
for (let attr of elemento.attributes) {
    console.log(attr.name + ': ' + attr.value);
}
```

### Estilo e Classes CSS

```javascript
// Classes CSS
console.log(elemento.classList);           // Lista de classes
console.log(elemento.classList.contains('ativa')); // Verifica classe
console.log(elemento.className);           // String com todas as classes

// Estilos inline
console.log(elemento.style.color);         // Cor do texto
console.log(elemento.style.backgroundColor); // Cor de fundo
console.log(elemento.style.display);       // Display CSS
```

## 🧠 Conceitos Fundamentais para Entender

### 1. **DOM é uma API**
O DOM não é JavaScript - é uma **API** (Application Programming Interface) que o JavaScript usa para interagir com HTML.

### 2. **DOM é Dinâmico**
Quando você modifica o DOM via JavaScript, a página é atualizada **em tempo real** sem recarregar.

### 3. **DOM vs HTML Source**
- **HTML Source**: Código original que você escreveu
- **DOM**: Representação atual na memória (pode ser diferente após modificações JS)

### 4. **Performance**
Acessar o DOM é **mais lento** que operações JavaScript normais. Por isso é importante:
- Cachear seleções de elementos
- Minimizar manipulações desnecessárias
- Usar métodos eficientes

### 5. **DOM Ready vs Window Load**
```javascript
// DOM Ready (HTML carregado, mas pode faltar imagens/CSS)
document.addEventListener('DOMContentLoaded', function() {
    // DOM está pronto para manipulação
});

// Window Load (tudo carregado: imagens, CSS, scripts)
window.addEventListener('load', function() {
    // Página completamente carregada
});
```

## 🎯 Casos de Uso Práticos do DOM

### Exemplo 1: Informações da Página
```javascript
// Descobrir informações sobre a página atual
console.log('Título:', document.title);
console.log('URL:', document.location.href);
console.log('Quantos parágrafos:', document.querySelectorAll('p').length);
console.log('Quantos links:', document.querySelectorAll('a').length);
```

### Exemplo 2: Encontrar Elementos Específicos
```javascript
// Encontrar elementos com diferentes critérios
const botaoPrincipal = document.querySelector('button.primary');
const todosInputs = document.querySelectorAll('input[type="text"]');
const primeiraImagem = document.querySelector('img');
const elementosComId = document.querySelectorAll('[id]');
```

### Exemplo 3: Análise da Estrutura
```javascript
// Analisar a estrutura da página
const body = document.body;
console.log('Filhos diretos do body:', body.children.length);

// Percorrer todos os elementos
function analisarElemento(elemento, nivel = 0) {
    const indentacao = '  '.repeat(nivel);
    console.log(indentacao + elemento.tagName + (elemento.id ? '#' + elemento.id : ''));
    
    for (let filho of elemento.children) {
        analisarElemento(filho, nivel + 1);
    }
}

analisarElemento(document.body);
```

## 💡 Conceitos Avançados (Introdução)

### Event Bubbling e Capturing
O DOM tem um sistema de **propagação de eventos** onde eventos "sobem" pela árvore DOM (bubbling) ou "descem" (capturing).

### Live Collections vs Static Collections
- `getElementsByClassName()` retorna **coleção viva** (atualiza automaticamente)
- `querySelectorAll()` retorna **coleção estática** (foto do momento)

### DocumentFragment
Para manipulações em lote, existe o `DocumentFragment` que permite modificações "fora" do DOM antes de inserir.

## 🎯 Por que o DOM é Importante?

1. **Base da Interatividade Web**: Todo site dinâmico usa DOM
2. **Fundação para Frameworks**: React, Vue, Angular manipulam DOM
3. **Debugging**: Entender DOM ajuda a debuggar problemas
4. **Performance**: Conhecer DOM permite otimizações
5. **Compatibilidade**: Funciona em todos os navegadores

## 📚 Resumo dos Conceitos-Chave

### **O que Aprendemos:**
- ✅ DOM é uma representação em árvore do HTML
- ✅ `document` é o ponto de entrada para tudo
- ✅ Elementos são objetos com propriedades e métodos
- ✅ Existem vários métodos para selecionar elementos
- ✅ Elementos têm relacionamentos familiares (pai, filho, irmão)
- ✅ DOM é dinâmico e pode ser modificado em tempo real

### **Próximos Passos:**
Esta aula cobriu os **fundamentos teóricos** do DOM. Nas próximas aulas aprenderemos:
- **Manipular** elementos (modificar conteúdo, estilos, atributos)
- **Criar e remover** elementos dinamicamente
- **Trabalhar com eventos** (clicks, teclas, formulários)
- **Boas práticas** de performance e organização

**💡 Dica Final:** O DOM é como o "sistema nervoso" das páginas web - entender sua estrutura é fundamental para qualquer desenvolvimento front-end!
- [W3C Markup Validator](https://validator.w3.org/)
- Extensão HTML Validate no VS Code

### **Emmet no VS Code**
```
html:5    → Estrutura HTML5 completa
div>p*3   → Div com 3 parágrafos
ul>li*5   → Lista com 5 itens
```