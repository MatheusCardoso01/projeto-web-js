let elemento = document.querySelector("#titulo-principal");
for (let i = 0; i < 10; i++) {
    
    elemento.style.color = 'red';
    
    setTimeout(function () {
        elemento.style.color = 'blue';
        elemento.style.backgroundColor = 'yellow';
        elemento.style.width = '400px';
    }, 1000);
    
}