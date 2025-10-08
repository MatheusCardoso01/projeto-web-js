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

| Protocolo | Função | Porta |
|-----------|--------|-------|
| **FTP** | Transferência de arquivos | 21 |
| **SSH** | Acesso remoto seguro | 22 |
| **DNS** | Resolução de nomes | 53 |
| **POP3** | Recebimento de emails | 110 |
| **IMAP** | Gerenciamento de emails | 143 |

---

# 🚀 AULA 2: MÉTODOS HTTP NA PROGRAMAÇÃO

---

## 📝 Métodos HTTP na Programação

### 📊 Resumo dos Métodos

|    Método    |    Ação    | Seguro* | Idempotente** | Tem Corpo |
|--------------|------------|---------|---------------|-----------|
| **GET**      | Buscar     | ✅     | ✅            | ❌       |
| **POST**     | Criar      | ❌     | ❌            | ✅       |
| **PUT**      | Substituir | ❌     | ✅            | ✅       |
| **PATCH**    | Atualizar  | ❌     | ❌            | ✅       |
| **DELETE**   | Remover    | ❌     | ✅            | ❌       |
| **HEAD**     | Metadados  | ✅     | ✅            | ❌       |
| **OPTIONS**  | Opções     | ✅     | ✅            | ❌       |

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

| Código | Significado | Quando Usar |
|--------|-------------|-------------|
| **200** | OK | Recurso encontrado |
| **201** | Created | Recurso criado |
| **404** | Not Found | URL não existe |
| **400** | Bad Request | URL malformada |
| **301** | Moved Permanently | URL mudou definitivamente |
| **302** | Found | Redirecionamento temporário |

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
