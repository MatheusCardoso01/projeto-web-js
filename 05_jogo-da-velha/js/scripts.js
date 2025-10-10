let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes = document.querySelectorAll(".box")
let buttons = document.querySelectorAll("button");
let message = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

//Contador de jogadas
let player1 = 0;
let player2 = 0;

//Matriz de verificação
let matrizDeVerificacao = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

//Adicionar evento de click aos boxes
for (let i = 0; i < boxes.length; i++) {

    let resultado;

    //Quando alguém clica na caixa
    boxes[i].addEventListener('click', function () {

        let el = identificarJogador();

        validarJogada(this, el, i);

    });

}

function validarJogada(boxEscolhida, el, i) {
    if (boxEscolhida.childNodes.length == 0) {
        let jogador;
        let cloneEl = el.cloneNode(true);
        boxEscolhida.appendChild(cloneEl);

        if (player1 == player2) {
            player1++;
            jogador = "x";
        } else {
            player2++;
            jogador = "o";
        }

        preencherMatriz(i, jogador);

        let resultado = verificarSeAlguemGanhou();
    }
}

function verificarSeAlguemGanhou() {

    for (let i = 0; i < 3; i++) {
        if (matrizDeVerificacao[i][0] == matrizDeVerificacao[i][1] && matrizDeVerificacao[i][1] == matrizDeVerificacao[i][2] && matrizDeVerificacao[i][0] != null) {
            return true;
        };

        if (matrizDeVerificacao[0][i] == matrizDeVerificacao[1][i] && matrizDeVerificacao[1][i] == matrizDeVerificacao[2][i] && matrizDeVerificacao[0][i] != null) {
            return true;
        };
    }

    if (matrizDeVerificacao[0][0] == matrizDeVerificacao[1][1] && matrizDeVerificacao[1][1] == matrizDeVerificacao[2][2] && matrizDeVerificacao[0][0] != null) {
        return true;
    } else if (matrizDeVerificacao[2][0] == matrizDeVerificacao[1][1] && matrizDeVerificacao[1][1] == matrizDeVerificacao[0][2] && matrizDeVerificacao[2][0] != null) {
        return true;
    }

    return false;

}

function identificarJogador() {
    if (player1 == player2) {
        return x;
    } else {
        return o;
    }

}

function preencherMatriz(i, jogador) {
    if (i < 3) {
        matrizDeVerificacao[0][i] = jogador;
    } else if (i < 6) {
        matrizDeVerificacao[1][i - 3] = jogador;
    } else {
        matrizDeVerificacao[2][i - 3] = jogador;
    }
}