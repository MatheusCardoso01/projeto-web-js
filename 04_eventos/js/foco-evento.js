let input = document.querySelector('#Campo1');

//Clica no campo 1
input.addEventListener('focus', function(e) {
    console.log("Entrou no input do campo 1");    
});

//Clica fora do campo 1
input.addEventListener('blur', function(e) {
    console.log("Saiu do campo 1");    
});