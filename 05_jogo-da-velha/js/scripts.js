let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes = document.querySelectorAll(".box")
let buttons = document.querySelectorAll("button");
let message = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

//Contador de jogadas e jogador atual
let player1 = 0;
let player2 = 0;
let jogador;

//Variável de finalização
jogoFinalizado = false;

//Matriz de verificação
let matrizDeVerificacao = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

buttons.forEach(button => {
    button.addEventListener('click', function () {
        if (jogoFinalizado) {
            limparTabuleiro();
        }
        document.querySelector('#campo-container').classList.remove('hide');
    });
});


//Adicionar evento de click aos boxes
for (let i = 0; i < boxes.length; i++) {

    //Quando alguém clica na caixa
    boxes[i].addEventListener('click', function () {
        if (jogoFinalizado) {
            return;
        };

        let el = identificarJogador();

        validarJogada(this, el, i);

    });

}

function validarJogada(boxEscolhida, el, i) {
    if (boxEscolhida.childNodes.length == 0) {
        let cloneEl = el.cloneNode(true);
        boxEscolhida.appendChild(cloneEl);

        if (player1 == player2) {
            player1++;
            jogador = "x";
        } else {
            player2++;
            jogador = "o";
        }

        preencherMatriz(i);

        verificarSeAlguemGanhou();

    }
}

function verificarSeAlguemGanhou() {

    for (let i = 0; i < 3; i++) {
        if (matrizDeVerificacao[i][0] == matrizDeVerificacao[i][1] && matrizDeVerificacao[i][1] == matrizDeVerificacao[i][2] && matrizDeVerificacao[i][0] != null) {
            let resultado = "Ganhou";
            imprimirResultado(resultado);
            return;
        };

        if (matrizDeVerificacao[0][i] == matrizDeVerificacao[1][i] && matrizDeVerificacao[1][i] == matrizDeVerificacao[2][i] && matrizDeVerificacao[0][i] != null) {
            let resultado = "Ganhou";
            imprimirResultado(resultado);
            return;
        };
    }

    if (matrizDeVerificacao[0][0] == matrizDeVerificacao[1][1] && matrizDeVerificacao[1][1] == matrizDeVerificacao[2][2] && matrizDeVerificacao[0][0] != null) {
        let resultado = "Ganhou";
        imprimirResultado(resultado);
        return;
    } else if (matrizDeVerificacao[2][0] == matrizDeVerificacao[1][1] && matrizDeVerificacao[1][1] == matrizDeVerificacao[0][2] && matrizDeVerificacao[2][0] != null) {
        let resultado = "Ganhou";
        imprimirResultado(resultado);
        return;
    }

    verificarSeDeuVelha();

}

function imprimirResultado(resultado) {
    if (resultado == 'Ganhou') {
        messageText.textContent = 'O jogador ' + jogador.toUpperCase() + ' venceu!!!';
        message.classList.remove('hide');

        atualizarPlacar();
        jogoFinalizado = true;

        return;
    }

    messageText.textContent = 'Deu Velha!!!';
    message.classList.remove('hide');

    jogoFinalizado = true;
}

function verificarSeDeuVelha() {
    if (player1 + player2 == 9) {
        let resultado = "Velha";
        imprimirResultado(resultado);
    }

}

function atualizarPlacar() {
    if (jogador == "x") {
        let placar = parseInt(document.getElementById("scoreboard-1").textContent);
        document.getElementById("scoreboard-1").textContent = ++placar;
        return;
    }

    let placar = parseInt(document.getElementById("scoreboard-2").textContent);
    document.getElementById("scoreboard-2").textContent = ++placar;
}

function limparTabuleiro() {
    jogoFinalizado = false;
    message.classList.add('hide');
    player1 = 0;
    player2 = 0;

    boxes.forEach(box => {
        box.innerHTML = "";
    });

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            matrizDeVerificacao[i][j] = null;
        }
    }
}

function identificarJogador() {
    if (player1 == player2) {
        return x;
    } else {
        return o;
    }

}

function preencherMatriz(i) {
    if (i < 3) {
        matrizDeVerificacao[0][i] = jogador;
    } else if (i < 6) {
        matrizDeVerificacao[1][i - 3] = jogador;
    } else {
        matrizDeVerificacao[2][i - 6] = jogador;
    }
}