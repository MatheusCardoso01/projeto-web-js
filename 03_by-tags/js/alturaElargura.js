let elemento = document.querySelector("#titulo-principal");

console.log('largura: ' + elemento.offsetWidth); //considera bordas
console.log('altura: ' + elemento.offsetHeight); // considera bordas

console.log('largura: ' + elemento.clientWidth);
console.log('largura: ' + elemento.clientHeight);

