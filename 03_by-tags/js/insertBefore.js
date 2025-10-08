let novoElemento = document.createElement("h3");
let texto = document.createTextNode("###Testando novo nó###");

novoElemento.appendChild(texto);

//querySelector # para id e . para classe. Tag sem nada
let elementoAlvo = document.querySelector("p");
let elementoPai = document.querySelector("#container-principal");

elementoPai.insertBefore(novoElemento, elementoAlvo);

console.log("\n");

console.log(document.getElementById("container-principal"));

//CRIANDO FORMULÁRIO

// Criar label
let label = document.createElement("label");
label.textContent = "Nome:";
label.setAttribute("for", "campoNome");

// Criar input
let input = document.createElement("input");
input.type = "text";
input.id = "campoNome";
input.className = "teste";
input.name = "nome";
input.placeholder = "Digite seu nome completo";
input.required = true;

// Criar div container
let container = document.createElement("div");
container.appendChild(label);
container.appendChild(input);

// Inserir no DOM
let elementoPai2 = document.querySelector("#container-principal");
elementoPai2.appendChild(container);

