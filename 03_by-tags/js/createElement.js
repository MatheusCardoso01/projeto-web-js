let lista = document.createElement('ul');

for (let i = 0; i < 5; i++) {
    let item = document.createElement('li');
    let texto = document.createTextNode("texto lista " + (i + 1));
    item.appendChild(texto);
    lista.appendChild(item);
}

let parentNode = document.querySelector("ul").parentElement;

parentNode.appendChild(lista);
