# 📚 GUIA COMPLETO DE TAGS HTML

<div style="text-align: center; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px; margin: 20px 0;">
<h2 style="margin: 0; font-size: 24px;">🎯 Manual Didático e Prático</h2>
<p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">Referência completa das tags HTML mais importantes com exemplos práticos</p>
</div>

---

## 📋 ÍNDICE DETALHADO

### 🏗️ [1. ESTRUTURA BÁSICA DO HTML](#1-estrutura-básica-do-html)
- [1.1 Documento HTML Mínimo](#11-documento-html-mínimo)
- [1.2 Tag DOCTYPE](#12-tag-doctype)
- [1.3 Tag HTML](#13-tag-html)
- [1.4 Seção HEAD](#14-seção-head)
- [1.5 Seção BODY](#15-seção-body)

### 📝 [2. TAGS DE TEXTO E CONTEÚDO](#2-tags-de-texto-e-conteúdo)
- [2.1 Títulos e Hierarquia (H1-H6)](#21-títulos-e-hierarquia-h1-h6)
- [2.2 Parágrafos e Texto](#22-parágrafos-e-texto)
- [2.3 Quebras e Divisores](#23-quebras-e-divisores)
- [2.4 Texto Pré-formatado](#24-texto-pré-formatado)
- [2.5 Formatação e Ênfase](#25-formatação-e-ênfase)

### 🔗 [3. LINKS E NAVEGAÇÃO](#3-links-e-navegação)
- [3.1 Tag A (Âncora)](#31-tag-a-âncora)
- [3.2 Tipos de Links](#32-tipos-de-links)
- [3.3 Atributos de Links](#33-atributos-de-links)

### 📋 [4. LISTAS](#4-listas)
- [4.1 Lista Não Ordenada (UL)](#41-lista-não-ordenada-ul)
- [4.2 Lista Ordenada (OL)](#42-lista-ordenada-ol)
- [4.3 Lista de Definições (DL)](#43-lista-de-definições-dl)

### 🖼️ [5. IMAGENS E MÍDIA](#5-imagens-e-mídia)
- [5.1 Imagens (IMG)](#51-imagens-img)
- [5.2 Vídeos (VIDEO)](#52-vídeos-video)
- [5.3 Áudio (AUDIO)](#53-áudio-audio)

### 📝 [6. FORMULÁRIOS](#6-formulários)
- [6.1 Estrutura de Formulário](#61-estrutura-de-formulário)
- [6.2 Tipos de Input](#62-tipos-de-input)
- [6.3 Outros Elementos de Formulário](#63-outros-elementos-de-formulário)

### 🏛️ [7. TAGS SEMÂNTICAS HTML5](#7-tags-semânticas-html5)
- [7.1 Conceitos de Semântica](#71-conceitos-de-semântica)
- [7.2 Estrutura Semântica](#72-estrutura-semântica)
- [7.3 Tags Semânticas Principais](#73-tags-semânticas-principais)

### 📊 [8. TABELAS](#8-tabelas)
- [8.1 Estrutura Básica de Tabelas](#81-estrutura-básica-de-tabelas)
- [8.2 Elementos de Tabela](#82-elementos-de-tabela)

### 📚 [9. REFERÊNCIA RÁPIDA](#9-referência-rápida)
- [9.1 Checklist de Tags Essenciais](#91-checklist-de-tags-essenciais)
- [9.2 Tabela de Referência](#92-tabela-de-referência)
- [9.3 Dicas e Boas Práticas](#93-dicas-e-boas-práticas)

---

<div style="page-break-before: always;"></div>

# 1. ESTRUTURA BÁSICA DO HTML

<div style="background: #f8f9fa; border-left: 5px solid #007bff; padding: 15px; margin: 15px 0;">
<strong>💡 Objetivo desta seção:</strong> Compreender as tags fundamentais que formam a estrutura de qualquer documento HTML válido.
</div>

## 1.1 Documento HTML Mínimo

A estrutura mínima de um documento HTML segue um padrão específico que deve ser respeitado para garantir compatibilidade e funcionalidade adequada:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minha Página</title>
</head>
<body>
    <h1>Olá, Mundo!</h1>
    <p>Este é meu primeiro documento HTML.</p>
</body>
</html>
```

## 1.2 Tag DOCTYPE

<div style="background: #e3f2fd; border-radius: 8px; padding: 12px; margin: 10px 0;">

### 🔷 `<!DOCTYPE html>`

**💡 Definição:** Declaração obrigatória que indica ao navegador que estamos usando HTML5.

**🎯 Função:**
- Garante renderização no modo padrão (não compatibilidade)
- Evita problemas de interpretação entre navegadores  
- **Sempre** deve ser a primeira linha do arquivo

**✨ Importante:** É a única "tag" que não tem fechamento!

</div>

## 1.3 Tag HTML

<div style="background: #e8f5e8; border-radius: 8px; padding: 12px; margin: 10px 0;">

### 🔷 `<html lang="pt-br">`

**💡 Definição:** Elemento raiz que envolve todo o conteúdo da página.

**🎯 Atributos importantes:**
- `lang="pt-br"` - Define o idioma principal da página
- Melhora acessibilidade (leitores de tela)
- Otimiza SEO para mecanismos de busca

**✨ Estrutura:**
```html
<html lang="pt-br">
    <!-- Todo o conteúdo da página fica aqui -->
</html>
```

</div>

## 1.4 Seção HEAD

<div style="background: #fff3e0; border-radius: 8px; padding: 12px; margin: 10px 0;">

### 🔷 `<head>`

**💡 Definição:** Contém metadados sobre o documento (não visível na página).

**🎯 Elementos essenciais:**

#### **Meta Tags Obrigatórias:**

| Tag | Função | Exemplo |
|-----|---------|---------|
| `<meta charset="UTF-8">` | Codificação de caracteres | `<meta charset="UTF-8">` |
| `<meta name="viewport">` | Responsividade mobile | `<meta name="viewport" content="width=device-width, initial-scale=1.0">` |
| `<title>` | Título da página | `<title>Minha Página</title>` |

#### **Exemplo completo HEAD:**
```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Descrição da página">
    <meta name="keywords" content="html, css, javascript">
    <title>Título da Página</title>
    <link rel="stylesheet" href="styles.css">
    <script src="script.js"></script>
</head>
```

</div>

## 1.5 Seção BODY

<div style="background: #f3e5f5; border-radius: 8px; padding: 12px; margin: 10px 0;">

### 🔷 `<body>`

**💡 Definição:** Contém todo o conteúdo visível da página web.

**🎯 Características:**
- Único elemento onde colocamos conteúdo visível
- Pode conter qualquer tag HTML de conteúdo
- Local onde aplicamos JavaScript para interatividade

**✨ Estrutura típica:**
```html
<body>
    <header>Cabeçalho da página</header>
    <nav>Menu de navegação</nav>
    <main>Conteúdo principal</main>
    <footer>Rodapé da página</footer>
</body>
```

</div>

---

<div style="page-break-before: always;"></div>

# 2. TAGS DE TEXTO E CONTEÚDO

<div style="background: #f8f9fa; border-left: 5px solid #28a745; padding: 15px; margin: 15px 0;">
<strong>💡 Objetivo desta seção:</strong> Dominar as tags para estruturação e formatação de texto em HTML.
</div>

## 2.1 Títulos e Hierarquia (H1-H6)

### 🔷 Tags `<h1>` até `<h6>` - Títulos Hierárquicos

<div style="background: #e3f2fd; border-radius: 8px; padding: 12px; margin: 10px 0;">

**💡 Definição:** Definem hierarquia de títulos do mais importante (h1) ao menos importante (h6).

**🎯 Hierarquia visual:**

```html
<h1>Título Principal (Maior)</h1>
<h2>Título de Seção</h2>
<h3>Título de Subseção</h3>
<h4>Título de Sub-subseção</h4>
<h5>Título Menor</h5>
<h6>Título Mínimo</h6>
```

**📊 Tabela de Tamanhos Padrão:**

| Tag | Tamanho | Uso Recomendado | SEO |
|-----|---------|----------------|-----|
| `<h1>` | 32px | Título principal da página | ⭐⭐⭐⭐⭐ |
| `<h2>` | 24px | Seções principais | ⭐⭐⭐⭐ |
| `<h3>` | 18px | Subseções | ⭐⭐⭐ |
| `<h4>` | 16px | Sub-subseções | ⭐⭐ |
| `<h5>` | 13px | Detalhamentos | ⭐ |
| `<h6>` | 11px | Uso específico | ⭐ |

**✨ Boas práticas:**
- Use apenas um `<h1>` por página
- Mantenha ordem hierárquica (não pule níveis)
- Seja descritivo nos títulos

</div>

## 2.2 Parágrafos e Texto

### 🔷 `<p>` - Parágrafos

<div style="background: #e8f5e8; border-radius: 8px; padding: 12px; margin: 10px 0;">

**💡 Definição:** Define um parágrafo de texto com espaçamento automático.

**🎯 Características:**
- Adiciona margem superior e inferior automaticamente
- Elemento de bloco (ocupa toda largura disponível)
- Ideal para textos corridos

**✨ Exemplo prático:**
```html
<p>Este é um parágrafo normal com texto corrido que pode 
   conter várias frases e se adapta automaticamente à 
   largura do container.</p>

<p>Este é outro parágrafo separado automaticamente.</p>
```

</div>

## 2.3 Quebras e Divisores

### 🔷 `<br>` e `<hr>` - Quebras e Divisores

<div style="background: #fff3e0; border-radius: 8px; padding: 12px; margin: 10px 0;">

#### **Tag `<br>` - Quebra de Linha**

**💡 Definição:** Força quebra de linha (equivale ao "Enter").

```html
<p>Primeira linha<br>
   Segunda linha<br>
   Terceira linha</p>
```

#### **Tag `<hr>` - Linha Divisória**

**💡 Definição:** Cria linha horizontal divisória.

```html
<h2>Seção 1</h2>
<p>Conteúdo da seção 1</p>

<hr>

<h2>Seção 2</h2>
<p>Conteúdo da seção 2</p>
```

**⚠️ Importante:** Ambas são tags vazias (sem fechamento)

</div>

## 2.4 Texto Pré-formatado

### 🔷 `<pre>` - Texto Pré-formatado

<div style="background: #f3e5f5; border-radius: 8px; padding: 12px; margin: 10px 0;">

**💡 Definição:** Preserva espaços, quebras de linha e formatação original.

**🎯 Casos de uso:**
- Código de programação
- Arte ASCII
- Poesia ou texto com formatação específica

**✨ Exemplo:**
```html
<pre>
function olaMundo() {
    console.log("Olá, Mundo!");
    return true;
}
</pre>
```

**📊 Comparação:**

| Elemento | Preserva Espaços | Quebras de Linha | Fonte |
|----------|------------------|------------------|--------|
| `<p>` | ❌ | ❌ | Normal |
| `<pre>` | ✅ | ✅ | Monospace |

</div>

## 2.5 Formatação e Ênfase

<div style="background: #e3f2fd; border-radius: 8px; padding: 12px; margin: 10px 0;">

### **Tags Semânticas vs Visuais**

**🎯 Tags Semânticas (Recomendadas):**

| Tag | Significado | Uso | Exemplo |
|-----|-------------|-----|---------|
| `<strong>` | Forte importância | Texto **muito importante** | `<strong>URGENTE</strong>` |
| `<em>` | Ênfase | Texto com *ênfase* | `<em>realmente</em> importante` |
| `<mark>` | Destacado | Texto ==destacado== | `<mark>informação importante</mark>` |
| `<small>` | Texto secundário | Observações pequenas | `<small>*condições aplicam</small>` |

**✨ Tags Adicionais:**

| Tag | Função | Resultado Visual |
|-----|--------|------------------|
| `<code>` | Código inline | `código` |
| `<kbd>` | Teclas do teclado | <kbd>Ctrl+C</kbd> |
| `<samp>` | Saída de programa | `output` |
| `<var>` | Variável matemática | *x* + *y* = *z* |
| `<sup>` | Sobrescrito | X² |
| `<sub>` | Subscrito | H₂O |

</div>

---

<div style="page-break-before: always;"></div>

# 3. LINKS E NAVEGAÇÃO

<div style="background: #f8f9fa; border-left: 5px solid #dc3545; padding: 15px; margin: 15px 0;">
<strong>💡 Objetivo desta seção:</strong> Dominar a criação de links e elementos de navegação.
</div>

## 3.1 Tag A (Âncora)

<div style="background: #e3f2fd; border-radius: 8px; padding: 12px; margin: 10px 0;">

### 🔷 `<a>` - Tag de Link (Âncora)

**💡 Definição:** Cria links para outras páginas, seções ou recursos.

**🎯 Sintaxe básica:**
```html
<a href="destino">Texto do link</a>
```

**📊 Atributos principais:**

| Atributo | Função | Exemplo |
|----------|---------|---------|
| `href` | URL de destino | `href="https://google.com"` |
| `target` | Como abrir o link | `target="_blank"` |
| `title` | Tooltip informativo | `title="Ir para Google"` |
| `download` | Forçar download | `download="arquivo.pdf"` |

</div>

## 3.2 Tipos de Links

### **Links Externos**

<div style="background: #e8f5e8; border-radius: 8px; padding: 12px; margin: 10px 0;">

**🌐 Para outros sites:**
```html
<!-- Link básico -->
<a href="https://www.google.com">Ir para Google</a>

<!-- Abre em nova aba -->
<a href="https://www.github.com" target="_blank">
    GitHub (Nova aba)
</a>

<!-- Com informações extras -->
<a href="https://www.mozilla.org" 
   target="_blank" 
   title="Site da Mozilla"
   rel="noopener">
    Mozilla Foundation
</a>
```

</div>

### **Links Internos**

<div style="background: #fff3e0; border-radius: 8px; padding: 12px; margin: 10px 0;">

**🏠 Para outras páginas do site:**
```html
<!-- Página no mesmo diretório -->
<a href="sobre.html">Sobre Nós</a>

<!-- Página em subdiretório -->
<a href="produtos/catalogo.html">Catálogo</a>

<!-- Voltar um diretório -->
<a href="../index.html">Página Inicial</a>
```

**📍 Para seções da mesma página:**
```html
<!-- Link para seção -->
<a href="#contato">Ir para Contato</a>

<!-- Seção de destino -->
<section id="contato">
    <h2>Entre em Contato</h2>
</section>
```

</div>

### **Links de Ação**

<div style="background: #f3e5f5; border-radius: 8px; padding: 12px; margin: 10px 0;">

**📧 Email, telefone e outros:**

| Tipo | Sintaxe | Exemplo |
|------|---------|---------|
| **Email** | `mailto:email` | `<a href="mailto:contato@site.com">Enviar Email</a>` |
| **Telefone** | `tel:numero` | `<a href="tel:+5511999999999">Ligar</a>` |
| **WhatsApp** | `https://wa.me/numero` | `<a href="https://wa.me/5511999999999">WhatsApp</a>` |
| **Download** | `href` + `download` | `<a href="arquivo.pdf" download>Baixar PDF</a>` |

</div>

## 3.3 Atributos de Links

<div style="background: #e3f2fd; border-radius: 8px; padding: 12px; margin: 10px 0;">

### **Tabela Completa de Atributos**

| Atributo | Valores | Função | Exemplo |
|----------|---------|--------|---------|
| `target` | `_blank`, `_self`, `_parent`, `_top` | Onde abrir o link | `target="_blank"` |
| `rel` | `noopener`, `nofollow`, `noreferrer` | Relação com o destino | `rel="noopener"` |
| `download` | nome do arquivo (opcional) | Forçar download | `download="relatorio.pdf"` |
| `title` | texto | Tooltip explicativo | `title="Clique aqui"` |
| `hreflang` | código do idioma | Idioma do destino | `hreflang="en"` |

### **⚡ Dicas de Performance e Segurança**

```html
<!-- ✅ Link seguro para externa -->
<a href="https://exemplo.com" 
   target="_blank" 
   rel="noopener noreferrer">
   Link Seguro
</a>

<!-- ✅ Link com preload -->
<a href="pagina.html" rel="prefetch">
   Página com Preload
</a>
```

</div>

---

<div style="page-break-before: always;"></div>

# 4. LISTAS

<div style="background: #f8f9fa; border-left: 5px solid #6f42c1; padding: 15px; margin: 15px 0;">
<strong>💡 Objetivo desta seção:</strong> Criar listas organizadas e estruturadas em HTML.
</div>

## 4.1 Lista Não Ordenada (UL)

<div style="background: #e3f2fd; border-radius: 8px; padding: 12px; margin: 10px 0;">

### 🔷 `<ul>` e `<li>` - Lista Não Ordenada

**💡 Definição:** Cria listas com marcadores (bullets) sem ordem específica.

**🎯 Estrutura básica:**
```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
```

**📊 Tipos de marcadores:**

| Valor CSS | Marcador | Código |
|-----------|----------|--------|
| `disc` | ● | `<ul style="list-style-type: disc;">` |
| `circle` | ○ | `<ul style="list-style-type: circle;">` |
| `square` | ■ | `<ul style="list-style-type: square;">` |
| `none` | (sem) | `<ul style="list-style-type: none;">` |

**✨ Lista aninhada:**
```html
<ul>
    <li>Frutas
        <ul>
            <li>Maçã</li>
            <li>Banana</li>
        </ul>
    </li>
    <li>Vegetais</li>
</ul>
```

</div>

## 4.2 Lista Ordenada (OL)

<div style="background: #e8f5e8; border-radius: 8px; padding: 12px; margin: 10px 0;">

### 🔷 `<ol>` e `<li>` - Lista Ordenada

**💡 Definição:** Cria listas numeradas com ordem específica.

**🎯 Estrutura básica:**
```html
<ol>
    <li>Primeiro passo</li>
    <li>Segundo passo</li>
    <li>Terceiro passo</li>
</ol>
```

**📊 Tipos de numeração:**

| Atributo `type` | Resultado | Exemplo |
|----------------|-----------|---------|
| `1` (padrão) | 1, 2, 3, 4 | `<ol type="1">` |
| `A` | A, B, C, D | `<ol type="A">` |
| `a` | a, b, c, d | `<ol type="a">` |
| `I` | I, II, III, IV | `<ol type="I">` |
| `i` | i, ii, iii, iv | `<ol type="i">` |

**✨ Atributos úteis:**
```html
<!-- Começar do número 5 -->
<ol start="5">
    <li>Quinto item</li>
    <li>Sexto item</li>
</ol>

<!-- Ordem reversa -->
<ol reversed>
    <li>Último</li>
    <li>Penúltimo</li>
</ol>
```

</div>

## 4.3 Lista de Definições (DL)

<div style="background: #fff3e0; border-radius: 8px; padding: 12px; margin: 10px 0;">

### 🔷 `<dl>`, `<dt>` e `<dd>` - Lista de Definições

**💡 Definição:** Cria pares de termos e suas definições.

**🎯 Estrutura:**

| Tag | Função |
|-----|--------|
| `<dl>` | Container da lista de definições |
| `<dt>` | Termo a ser definido |
| `<dd>` | Definição do termo |

**✨ Exemplo prático:**
```html
<dl>
    <dt>HTML</dt>
    <dd>Linguagem de marcação para estruturar páginas web</dd>
    
    <dt>CSS</dt>
    <dd>Linguagem para estilizar elementos HTML</dd>
    
    <dt>JavaScript</dt>
    <dd>Linguagem de programação para interatividade</dd>
</dl>
```

**📊 Resultado visual típico:**
```
HTML
    Linguagem de marcação para estruturar páginas web

CSS  
    Linguagem para estilizar elementos HTML

JavaScript
    Linguagem de programação para interatividade
```

</div>

---

<div style="page-break-before: always;"></div>

# 5. IMAGENS E MÍDIA

<div style="background: #f8f9fa; border-left: 5px solid #fd7e14; padding: 15px; margin: 15px 0;">
<strong>💡 Objetivo desta seção:</strong> Incorporar imagens, vídeos e áudio em páginas web.
</div>

## 5.1 Imagens (IMG)

<div style="background: #e3f2fd; border-radius: 8px; padding: 12px; margin: 10px 0;">

### 🔷 `<img>` - Imagens

**💡 Definição:** Incorpora imagens na página (tag vazia - sem fechamento).

**🎯 Sintaxe obrigatória:**
```html
<img src="caminho/imagem.jpg" alt="Descrição da imagem">
```

**📊 Atributos essenciais:**

| Atributo | Obrigatório | Função | Exemplo |
|----------|-------------|--------|---------|
| `src` | ✅ | Caminho da imagem | `src="img/logo.png"` |
| `alt` | ✅ | Texto alternativo | `alt="Logo da empresa"` |
| `width` | ❌ | Largura em pixels | `width="300"` |
| `height` | ❌ | Altura em pixels | `height="200"` |
| `title` | ❌ | Tooltip | `title="Nossa logo"` |

**✨ Exemplo completo:**
```html
<img src="https://picsum.photos/300/200" 
     alt="Imagem aleatória do Picsum" 
     width="300" 
     height="200"
     title="Clique para ampliar">
```

**⚡ Formatos suportados:**

| Formato | Uso Recomendado | Qualidade |
|---------|----------------|-----------|
| **JPG/JPEG** | Fotos, imagens complexas | Boa compressão |
| **PNG** | Imagens com transparência | Sem perda |
| **GIF** | Animações simples | Limitada |
| **SVG** | Ícones, logotipos | Vetorial |
| **WebP** | Alternativa moderna | Excelente |

</div>

## 5.2 Vídeos (VIDEO)

<div style="background: #e8f5e8; border-radius: 8px; padding: 12px; margin: 10px 0;">

### 🔷 `<video>` - Vídeos

**💡 Definição:** Incorpora vídeos nativamente no navegador.

**🎯 Sintaxe básica:**
```html
<video controls>
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
    Seu navegador não suporta vídeo.
</video>
```

**📊 Atributos principais:**

| Atributo | Função | Exemplo |
|----------|--------|---------|
| `controls` | Mostra controles | `<video controls>` |
| `autoplay` | Reproduz automaticamente | `<video autoplay>` |
| `loop` | Reprodução contínua | `<video loop>` |
| `muted` | Sem som inicial | `<video muted>` |
| `poster` | Imagem de preview | `poster="thumb.jpg"` |

**✨ Exemplo avançado:**
```html
<video width="640" 
       height="360" 
       controls 
       poster="thumbnail.jpg"
       preload="metadata">
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
    <p>Seu navegador não suporta a tag video.</p>
</video>
```

</div>

## 5.3 Áudio (AUDIO)

<div style="background: #f3e5f5; border-radius: 8px; padding: 12px; margin: 10px 0;">

### 🔷 `<audio>` - Áudio

**💡 Definição:** Incorpora arquivos de áudio na página.

**🎯 Sintaxe básica:**
```html
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    <source src="audio.ogg" type="audio/ogg">
    Seu navegador não suporta áudio.
</audio>
```

**📊 Formatos de áudio:**

| Formato | Suporte | Qualidade |
|---------|---------|-----------|
| **MP3** | Universal | Boa |
| **OGG** | Firefox, Chrome | Excelente |
| **WAV** | Limitado | Sem compressão |
| **AAC** | Moderno | Muito boa |

**✨ Player customizado:**
```html
<figure>
    <figcaption>Ouça nosso podcast:</figcaption>
    <audio controls preload="none">
        <source src="podcast.mp3" type="audio/mpeg">
        <source src="podcast.ogg" type="audio/ogg">
        <p>Download: <a href="podcast.mp3">MP3</a></p>
    </audio>
</figure>
```

</div>

---

<div style="page-break-before: always;"></div>

# 6. FORMULÁRIOS

<div style="background: #f8f9fa; border-left: 5px solid #20c997; padding: 15px; margin: 15px 0;">
<strong>💡 Objetivo desta seção:</strong> Criar formulários interativos para coleta de dados.
</div>

## 6.1 Estrutura de Formulário

<div style="background: #e3f2fd; border-radius: 8px; padding: 12px; margin: 10px 0;">

### 🔷 `<form>` - Estrutura Principal

**💡 Definição:** Container principal que engloba todos os elementos do formulário.

**🎯 Atributos essenciais:**

| Atributo | Função | Exemplo |
|----------|--------|---------|
| `action` | URL de processamento | `action="processar.php"` |
| `method` | Método HTTP | `method="POST"` |
| `enctype` | Codificação dos dados | `enctype="multipart/form-data"` |

**✨ Estrutura básica:**
```html
<form action="processar.php" method="POST">
    <label for="nome">Nome:</label>
    <input type="text" id="nome" name="nome" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <button type="submit">Enviar</button>
</form>
```

</div>

## 6.2 Tipos de Input

<div style="background: #e8f5e8; border-radius: 8px; padding: 12px; margin: 10px 0;">

### **📊 Tabela Completa de Inputs**

| Tipo | HTML | Função | Validação |
|------|------|--------|-----------|
| **Texto** | `<input type="text">` | Texto simples | Padrão |
| **Email** | `<input type="email">` | Endereço email | Formato email |
| **Senha** | `<input type="password">` | Campo oculto | - |
| **Número** | `<input type="number">` | Apenas números | Min/max |
| **Telefone** | `<input type="tel">` | Número telefone | - |
| **URL** | `<input type="url">` | Endereço web | Formato URL |
| **Data** | `<input type="date">` | Seletor de data | Formato data |
| **Hora** | `<input type="time">` | Seletor de hora | Formato hora |
| **Cor** | `<input type="color">` | Seletor de cor | - |
| **Arquivo** | `<input type="file">` | Upload arquivo | Tipo arquivo |
| **Checkbox** | `<input type="checkbox">` | Múltipla escolha | - |
| **Radio** | `<input type="radio">` | Escolha única | - |
| **Range** | `<input type="range">` | Controle deslizante | Min/max |

### **✨ Exemplos práticos:**

```html
<!-- Campo com validação -->
<input type="email" 
       name="email" 
       placeholder="seu@email.com"
       required>

<!-- Número com limites -->
<input type="number" 
       name="idade" 
       min="18" 
       max="100" 
       value="25">

<!-- Upload múltiplos arquivos -->
<input type="file" 
       name="fotos" 
       accept="image/*" 
       multiple>

<!-- Slider customizado -->
<input type="range" 
       name="volume" 
       min="0" 
       max="100" 
       value="50">
```

</div>

## 6.3 Outros Elementos de Formulário

<div style="background: #fff3e0; border-radius: 8px; padding: 12px; margin: 10px 0;">

### **Elementos Adicionais**

#### **`<textarea>` - Texto Longo**
```html
<textarea name="mensagem" 
          rows="4" 
          cols="50" 
          placeholder="Digite sua mensagem...">
</textarea>
```

#### **`<select>` - Lista Suspensa**
```html
<select name="cidade">
    <option value="">Selecione uma cidade</option>
    <option value="sp">São Paulo</option>
    <option value="rj" selected>Rio de Janeiro</option>
    <option value="mg">Belo Horizonte</option>
</select>
```

#### **`<fieldset>` e `<legend>` - Agrupamento**
```html
<fieldset>
    <legend>Informações Pessoais</legend>
    
    <label for="nome">Nome:</label>
    <input type="text" id="nome" name="nome">
    
    <label for="idade">Idade:</label>
    <input type="number" id="idade" name="idade">
</fieldset>
```

### **📊 Atributos de Validação**

| Atributo | Função | Exemplo |
|----------|--------|---------|
| `required` | Campo obrigatório | `<input required>` |
| `pattern` | Expressão regular | `pattern="[0-9]{5}-[0-9]{3}"` |
| `min/max` | Valores mínimo/máximo | `min="18" max="65"` |
| `minlength/maxlength` | Tamanho texto | `minlength="8"` |
| `placeholder` | Texto de exemplo | `placeholder="Digite aqui"` |

</div>

---

<div style="page-break-before: always;"></div>

# 7. TAGS SEMÂNTICAS HTML5

<div style="background: #f8f9fa; border-left: 5px solid #e83e8c; padding: 15px; margin: 15px 0;">
<strong>💡 Objetivo desta seção:</strong> Estruturar páginas com significado semântico claro.
</div>

## 7.1 Conceitos de Semântica

<div style="background: #e3f2fd; border-radius: 8px; padding: 12px; margin: 10px 0;">

### 💡 O que são Tags Semânticas?

**🎯 Definição:** Tags que descrevem o **significado** do conteúdo, não apenas a aparência.

**✨ Benefícios:**
- 🤖 **SEO**: Motores de busca entendem melhor o conteúdo
- ♿ **Acessibilidade**: Leitores de tela navegam melhor
- 📱 **Responsividade**: Estrutura mais flexível
- 🧹 **Código Limpo**: Mais legível e organizizado

**📊 Comparação:**

| ❌ **Sem Semântica** | ✅ **Com Semântica** |
|----------------------|----------------------|
| `<div id="header">` | `<header>` |
| `<div class="nav">` | `<nav>` |
| `<div id="content">` | `<main>` |
| `<div class="sidebar">` | `<aside>` |
| `<div id="footer">` | `<footer>` |

</div>

## 7.2 Estrutura Semântica

<div style="background: #e8f5e8; border-radius: 8px; padding: 12px; margin: 10px 0;">

### **🏗️ Estrutura Semântica Completa**

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Site Semântico</title>
</head>
<body>
    <!-- Cabeçalho da página -->
    <header>
        <h1>Nome do Site</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </nav>
    </header>

    <!-- Conteúdo principal -->
    <main>
        <article>
            <header>
                <h2>Título do Artigo</h2>
                <time datetime="2024-01-15">15 de Janeiro, 2024</time>
            </header>
            
            <section>
                <h3>Introdução</h3>
                <p>Conteúdo da introdução...</p>
            </section>
            
            <section>
                <h3>Desenvolvimento</h3>
                <p>Conteúdo do desenvolvimento...</p>
            </section>
        </article>
        
        <!-- Barra lateral -->
        <aside>
            <h3>Artigos Relacionados</h3>
            <ul>
                <li><a href="#">Artigo 1</a></li>
                <li><a href="#">Artigo 2</a></li>
            </ul>
        </aside>
    </main>

    <!-- Rodapé -->
    <footer>
        <p>&copy; 2024 Nome do Site. Todos os direitos reservados.</p>
        <address>
            Contato: <a href="mailto:contato@site.com">contato@site.com</a>
        </address>
    </footer>
</body>
</html>
```

</div>

## 7.3 Tags Semânticas Principais

<div style="background: #f3e5f5; border-radius: 8px; padding: 12px; margin: 10px 0;">

### **📊 Referência Completa**

| Tag | Função | Uso | Exemplo |
|-----|--------|-----|---------|
| `<header>` | Cabeçalho | Topo da página/seção | Logo, menu, título |
| `<nav>` | Navegação | Menus principais | Links de navegação |
| `<main>` | Conteúdo principal | Conteúdo único da página | Artigo, formulário |
| `<section>` | Seção temática | Divisões lógicas | Capítulos, temas |
| `<article>` | Conteúdo independente | Posts, notícias | Blog post, produto |
| `<aside>` | Conteúdo secundário | Barra lateral | Links relacionados |
| `<footer>` | Rodapé | Final da página/seção | Copyright, contatos |
| `<figure>` | Conteúdo ilustrativo | Imagens, gráficos | Foto + legenda |
| `<figcaption>` | Legenda | Descrição de figura | Texto explicativo |
| `<time>` | Data/hora | Informações temporais | Data publicação |
| `<address>` | Informações contato | Endereços, telefones | Dados da empresa |

### **✨ Exemplo de Uso Específico**

#### **Artigo de Blog:**
```html
<article>
    <header>
        <h2>Como usar HTML Semântico</h2>
        <p>Por: <span>João Silva</span></p>
        <time datetime="2024-01-15">15 de Janeiro, 2024</time>
    </header>
    
    <figure>
        <img src="grafico.png" alt="Gráfico de uso semântico">
        <figcaption>
            Crescimento do uso de HTML semântico nos últimos anos
        </figcaption>
    </figure>
    
    <section>
        <h3>Introdução</h3>
        <p>HTML semântico melhora a estrutura...</p>
    </section>
    
    <footer>
        <p>Tags: HTML, Semântica, Web Development</p>
    </footer>
</article>
```

</div>

---

<div style="page-break-before: always;"></div>

# 8. TABELAS

<div style="background: #f8f9fa; border-left: 5px solid #6c757d; padding: 15px; margin: 15px 0;">
<strong>💡 Objetivo desta seção:</strong> Criar tabelas organizadas e acessíveis para dados tabulares.
</div>

## 8.1 Estrutura Básica de Tabelas

<div style="background: #e3f2fd; border-radius: 8px; padding: 12px; margin: 10px 0;">

### 🔷 Elementos Fundamentais

**📊 Hierarquia de uma tabela:**

```
<table>
├── <thead> (cabeçalho)
│   └── <tr> (linha)
│       └── <th> (célula cabeçalho)
├── <tbody> (corpo)
│   └── <tr> (linha)
│       └── <td> (célula dados)
└── <tfoot> (rodapé)
    └── <tr> (linha)
        └── <td> (célula rodapé)
```

**✨ Exemplo básico:**
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
            <td>João Silva</td>
            <td>30</td>
            <td>São Paulo</td>
        </tr>
        <tr>
            <td>Maria Santos</td>
            <td>25</td>
            <td>Rio de Janeiro</td>
        </tr>
    </tbody>
</table>
```

</div>

## 8.2 Elementos de Tabela

<div style="background: #e8f5e8; border-radius: 8px; padding: 12px; margin: 10px 0;">

### **📊 Tabela de Referência Completa**

| Tag | Função | Atributos Principais | Exemplo |
|-----|--------|---------------------|---------|
| `<table>` | Container principal | - | `<table border="1">` |
| `<thead>` | Cabeçalho da tabela | - | `<thead>` |
| `<tbody>` | Corpo da tabela | - | `<tbody>` |
| `<tfoot>` | Rodapé da tabela | - | `<tfoot>` |
| `<tr>` | Linha (table row) | - | `<tr>` |
| `<th>` | Célula cabeçalho | `scope`, `colspan`, `rowspan` | `<th scope="col">` |
| `<td>` | Célula dados | `colspan`, `rowspan` | `<td colspan="2">` |
| `<caption>` | Título da tabela | - | `<caption>Vendas 2024</caption>` |
| `<colgroup>` | Grupo de colunas | - | `<colgroup>` |
| `<col>` | Definição coluna | `span` | `<col span="2">` |

### **✨ Tabela Avançada com Todos os Elementos:**

```html
<table>
    <caption>Relatório de Vendas - Q1 2024</caption>
    
    <colgroup>
        <col style="background-color: #f0f0f0;">
        <col span="2" style="background-color: #e0e0e0;">
    </colgroup>
    
    <thead>
        <tr>
            <th scope="col">Vendedor</th>
            <th scope="col">Janeiro</th>
            <th scope="col">Fevereiro</th>
            <th scope="col">Março</th>
            <th scope="col">Total</th>
        </tr>
    </thead>
    
    <tbody>
        <tr>
            <th scope="row">João</th>
            <td>15.000</td>
            <td>18.000</td>
            <td>22.000</td>
            <td><strong>55.000</strong></td>
        </tr>
        <tr>
            <th scope="row">Maria</th>
            <td>20.000</td>
            <td>16.000</td>
            <td>19.000</td>
            <td><strong>55.000</strong></td>
        </tr>
    </tbody>
    
    <tfoot>
        <tr>
            <th scope="row">Total Geral</th>
            <td><strong>35.000</strong></td>
            <td><strong>34.000</strong></td>
            <td><strong>41.000</strong></td>
            <td><strong>110.000</strong></td>
        </tr>
    </tfoot>
</table>
```

### **🔧 Atributos Especiais:**

#### **Mesclagem de Células:**
```html
<!-- Mesclar colunas (colspan) -->
<td colspan="3">Célula ocupando 3 colunas</td>

<!-- Mesclar linhas (rowspan) -->
<td rowspan="2">Célula ocupando 2 linhas</td>
```

#### **Acessibilidade:**
```html
<!-- Para cabeçalhos de coluna -->
<th scope="col">Nome da Coluna</th>

<!-- Para cabeçalhos de linha -->
<th scope="row">Nome da Linha</th>

<!-- Associar células complexas -->
<th id="nome">Nome</th>
<td headers="nome">João Silva</td>
```

</div>

---

<div style="page-break-before: always;"></div>

# 9. REFERÊNCIA RÁPIDA

<div style="background: #f8f9fa; border-left: 5px solid #17a2b8; padding: 15px; margin: 15px 0;">
<strong>💡 Objetivo desta seção:</strong> Consulta rápida e checklist para desenvolvimento HTML.
</div>

## 9.1 Checklist de Tags Essenciais

<div style="background: #e3f2fd; border-radius: 8px; padding: 12px; margin: 10px 0;">

### **🏗️ Estrutura Básica**
- [ ] `<!DOCTYPE html>` - Declaração HTML5
- [ ] `<html lang="pt-br">` - Elemento raiz com idioma
- [ ] `<head>` - Metadados da página
- [ ] `<meta charset="UTF-8">` - Codificação caracteres
- [ ] `<meta name="viewport">` - Responsividade
- [ ] `<title>` - Título da página
- [ ] `<body>` - Conteúdo visível

### **📝 Conteúdo**
- [ ] `<h1>` a `<h6>` - Títulos hierárquicos
- [ ] `<p>` - Parágrafos
- [ ] `<a href="">` - Links
- [ ] `<img src="" alt="">` - Imagens
- [ ] `<ul>`, `<ol>`, `<li>` - Listas

### **🎯 Interação**
- [ ] `<form>` - Formulários
- [ ] `<input>` - Campos de entrada
- [ ] `<label>` - Rótulos de campos
- [ ] `<button>` - Botões
- [ ] `<select>`, `<option>` - Listas suspensas

</div>

## 9.2 Tabela de Referência

<div style="background: #e8f5e8; border-radius: 8px; padding: 12px; margin: 10px 0;">

### **📊 Tags por Categoria**

#### **🏗️ Estrutura e Semântica**
| Tag | Descrição | Exemplo |
|-----|-----------|---------|
| `<header>` | Cabeçalho | `<header><h1>Site</h1></header>` |
| `<nav>` | Navegação | `<nav><a href="#">Menu</a></nav>` |
| `<main>` | Conteúdo principal | `<main>Conteúdo</main>` |
| `<section>` | Seção temática | `<section><h2>Seção</h2></section>` |
| `<article>` | Artigo independente | `<article>Post</article>` |
| `<aside>` | Conteúdo lateral | `<aside>Sidebar</aside>` |
| `<footer>` | Rodapé | `<footer>© 2024</footer>` |

#### **📝 Texto e Formatação**
| Tag | Descrição | Exemplo |
|-----|-----------|---------|
| `<h1>` - `<h6>` | Títulos | `<h1>Título Principal</h1>` |
| `<p>` | Parágrafo | `<p>Texto do parágrafo</p>` |
| `<strong>` | Texto importante | `<strong>Importante</strong>` |
| `<em>` | Ênfase | `<em>Enfatizado</em>` |
| `<mark>` | Texto destacado | `<mark>Destacado</mark>` |
| `<code>` | Código | `<code>function()</code>` |
| `<pre>` | Texto pré-formatado | `<pre>Código\n  indentado</pre>` |

#### **🔗 Links e Mídia**
| Tag | Descrição | Exemplo |
|-----|-----------|---------|
| `<a>` | Link | `<a href="url">Link</a>` |
| `<img>` | Imagem | `<img src="img.jpg" alt="Foto">` |
| `<video>` | Vídeo | `<video controls><source></video>` |
| `<audio>` | Áudio | `<audio controls><source></audio>` |

#### **📋 Listas e Tabelas**
| Tag | Descrição | Exemplo |
|-----|-----------|---------|
| `<ul>`, `<ol>`, `<li>` | Listas | `<ul><li>Item</li></ul>` |
| `<table>`, `<tr>`, `<td>`, `<th>` | Tabela | `<table><tr><td>Célula</td></tr></table>` |

#### **📝 Formulários**
| Tag | Descrição | Exemplo |
|-----|-----------|---------|
| `<form>` | Formulário | `<form method="POST">` |
| `<input>` | Campo entrada | `<input type="text" name="nome">` |
| `<label>` | Rótulo | `<label for="campo">Nome:</label>` |
| `<textarea>` | Área texto | `<textarea rows="4"></textarea>` |
| `<select>`, `<option>` | Lista suspensa | `<select><option>Item</option></select>` |
| `<button>` | Botão | `<button type="submit">Enviar</button>` |

</div>

## 9.3 Dicas e Boas Práticas

<div style="background: #fff3e0; border-radius: 8px; padding: 12px; margin: 10px 0;">

### **✅ Boas Práticas Essenciais**

#### **🎯 SEO e Acessibilidade:**
- ✅ Use apenas um `<h1>` por página
- ✅ Mantenha hierarquia de títulos (h1 → h2 → h3)
- ✅ Sempre inclua `alt` em imagens
- ✅ Use `<label>` para todos os campos de formulário
- ✅ Inclua `lang` no elemento `<html>`

#### **📱 Responsividade:**
- ✅ Inclua viewport meta tag
- ✅ Use unidades relativas (%, em, rem)
- ✅ Teste em diferentes dispositivos
- ✅ Priorize mobile-first

#### **⚡ Performance:**
- ✅ Otimize imagens (WebP, compressão)
- ✅ Use atributos `loading="lazy"` em imagens
- ✅ Minimize requisições HTTP
- ✅ Use CDN quando possível

#### **🔒 Segurança:**
- ✅ Use `rel="noopener"` em links externos
- ✅ Valide dados no servidor
- ✅ Use HTTPS sempre
- ✅ Sanitize inputs de usuário

### **❌ Erros Comuns a Evitar**

- ❌ Tags não fechadas
- ❌ Aninhamento incorreto de elementos
- ❌ Usar `<div>` quando há tag semântica apropriada
- ❌ Esquecer `alt` em imagens
- ❌ Não associar `<label>` com inputs
- ❌ Usar tabelas para layout
- ❌ Texto muito pequeno (< 16px)
- ❌ Links sem descrição clara

### **🚀 Próximos Passos no Aprendizado**

1. **CSS** - Estilização e layout
2. **JavaScript** - Interatividade e dinamismo
3. **Frameworks** - Bootstrap, Tailwind
4. **Acessibilidade** - ARIA, WCAG
5. **Performance** - Core Web Vitals
6. **SEO** - Otimização para buscadores

</div>

---

<div style="text-align: center; background: #343a40; color: white; padding: 20px; border-radius: 10px; margin: 20px 0;">
<h2 style="margin: 0 0 10px 0;">🎉 Parabéns!</h2>
<p style="margin: 0; font-size: 16px;">Você completou o guia completo de tags HTML. Continue praticando e explorando o mundo do desenvolvimento web!</p>
<p style="margin: 10px 0 0 0; font-size: 14px; opacity: 0.8;">📚 Este guia foi otimizado para visualização em PDF</p>
</div>