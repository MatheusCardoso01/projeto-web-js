const { error } = require('console');
let { readFile, writeFile } = require('fs');

writeFile("arquivo.txt", "Texto inserido com writeFile", (error) => {
    if (error) {
        throw error;
    } else {
        console.log("Escreveu com sucesso. Ver arquivo.txt");
        
    }
});

readFile('arquivo.txt', 'utf-8', (error, texto) => {
    if (error) {
        throw error;
    } else {
        console.log(texto);
    }
});
