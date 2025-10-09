let loader = document.createElement('div');
Object.assign(loader.style, {
    position: 'fixed', top: '0', left: '0', width: '100%', height: '100%',
    backgroundColor: '#468e97ff', display: 'flex', justifyContent: 'center', 
    alignItems: 'center', zIndex: '9999'
});

// Criar spinner
let spinner = document.createElement('div');
Object.assign(spinner.style, {
    border: '4px solid #f3f3f3', borderTop: '4px solid #3498db',
    borderRadius: '50%', width: '50px', height: '50px',
    animation: 'spin 1s linear infinite'
});

// CSS da animação
document.head.innerHTML += '<style>@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}</style>';

// Montar e mostrar
loader.appendChild(spinner);
document.body.appendChild(loader);
document.body.style.overflow = 'hidden';

// Remover após 2s e iniciar animação
setTimeout(() => {
    loader.remove();
    document.body.style.overflow = 'visible';
    
    // Sua animação original (corrigida)
    let elemento = document.querySelector("#titulo-principal");
    let i = 0;
    let interval = setInterval(() => {
        elemento.style.color = i % 2 ? 'blue' : 'red';
        elemento.style.backgroundColor = 'yellow';
        elemento.style.width = '400px';
        if (++i >= 10) clearInterval(interval);
    }, 1000);
}, 2000);


