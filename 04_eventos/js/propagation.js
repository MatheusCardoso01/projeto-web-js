//Evita que dois eventos aconteçam juntos
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

let p = document.createElement('p');
let parentNode = document.querySelector('body');
let targetNode = document.querySelector('body #btn1');

parentNode.insertBefore(p, targetNode);

p.appendChild(targetNode);

function msg(event) {
    console.log("Clicou no botão");
    event.stopPropagation();
}

btn1.addEventListener("click", msg);

btn2.addEventListener("click", function (event) {
    console.log(event);
});

p.addEventListener("click", function() {
    console.log("Clicou no parágrafo");    
});