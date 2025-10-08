console.log("====ENCONTRANDO HTML E VALOR====");
console.log(document.getElementsByTagName('h1'));
//Tanto faz '' ou ""
console.log(document.getElementsByTagName("p"));

console.log(document.getElementById('titulo-principal'));

let id = "titulo-principal";
console.log(document.getElementById(id).innerText);

console.log(document.getElementsByClassName('itens-azuis'));

let vet = document.getElementsByClassName('itens-azuis');
console.log(vet[0].innerText);
console.log(typeof vet);

//Segue regras do CSS, retorna 1 elemento
console.log(document.querySelector('#container-principal'));

console.log(document.querySelector('#container-principal h1'));

console.log(document.querySelector('#segundo-container h1'));

console.log(document.querySelector('head title'));

console.log(document.querySelector('footer h2'));

console.log(document.querySelector('ul .itens-azuis'));

console.log(document.querySelector('ul .itens-azuis').innerText);

//Seggue CSS mas retorna colection
console.log(document.querySelectorAll('h1'));

vet = document.querySelectorAll('h1');
console.log(vet[0].innerText);
console.log(vet[1].innerText);