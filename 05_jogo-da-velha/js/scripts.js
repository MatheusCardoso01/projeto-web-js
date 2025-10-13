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

        secondPlayer = this.getAttribute("id");

        buttons.forEach(button => {
            button.style.display = 'none';
        });

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

        if (secondPlayer == 'botao_dois_jogadores') {

            if (player1 == player2) {
                player1++;
                jogador = "x";
                
            } else {
                player2++;
                jogador = "o";                
            }
            
            preencherMatriz(i);
    
            verificarSeAlguemGanhou();

        } else {
            //Player
            player1++;
            jogador = "x";

            preencherMatriz(i);
    
            let acabou = verificarSeAlguemGanhou();
            
            if (!acabou) {
                //IA
                i = computerPlay();
                player2++;
                jogador = "o";
    
                preencherMatriz(i);
        
                verificarSeAlguemGanhou();
            }
        }

    }
}

function verificarSeAlguemGanhou() {

    for (let i = 0; i < 3; i++) {
        if (matrizDeVerificacao[i][0] == matrizDeVerificacao[i][1] && matrizDeVerificacao[i][1] == matrizDeVerificacao[i][2] && matrizDeVerificacao[i][0] != null) {
            let resultado = "Ganhou";
            imprimirResultado(resultado);
            return true;
        };

        if (matrizDeVerificacao[0][i] == matrizDeVerificacao[1][i] && matrizDeVerificacao[1][i] == matrizDeVerificacao[2][i] && matrizDeVerificacao[0][i] != null) {
            let resultado = "Ganhou";
            imprimirResultado(resultado);
            return true;
        };
    }

    if (matrizDeVerificacao[0][0] == matrizDeVerificacao[1][1] && matrizDeVerificacao[1][1] == matrizDeVerificacao[2][2] && matrizDeVerificacao[0][0] != null) {
        let resultado = "Ganhou";
        imprimirResultado(resultado);
        return true;
    } else if (matrizDeVerificacao[2][0] == matrizDeVerificacao[1][1] && matrizDeVerificacao[1][1] == matrizDeVerificacao[0][2] && matrizDeVerificacao[2][0] != null) {
        let resultado = "Ganhou";
        imprimirResultado(resultado);
        return true;
    }

    let acabou = verificarSeDeuVelha();

    return acabou;
}

function imprimirResultado(resultado) {
    if (resultado == 'Ganhou') {
        if (jogador == 'x') {
            messageText.style.backgroundColor = '#b10f0fff';
        } else {
            messageText.style.backgroundColor = '#2ea865';
        }

        messageText.textContent = 'O jogador ' + jogador.toUpperCase() + ' venceu!!!';
        message.classList.remove('hide');

        atualizarPlacar();
        reativarBotoes();
        jogoFinalizado = true;

        return;
    }

    messageText.textContent = 'Deu Velha!!!';
    message.classList.remove('hide');

    jogoFinalizado = true;
    reativarBotoes();

}

function verificarSeDeuVelha() {
    if (player1 + player2 == 9) {
        let resultado = "Velha";
        imprimirResultado(resultado);

        return true;
    }
    return false;
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

    messageText.style.backgroundColor = '#000000ff';

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

function computerPlay() {
    let cloneO = o.cloneNode(true);
    let counter = 0;
    let filled = 0;
    //Só preencher se estiver com nó filho vazio
    for (let i = 0; i < boxes.length; i++) {
        let numAleatorio = Math.floor(Math.random() * 5);

        if (boxes[i].childNodes[0] == undefined) {
            if (numAleatorio <= 1) {
                boxes[i].appendChild(cloneO);
                counter++;

                return i;
            }
        } else {
            filled++;
        }
    }
    //Checagem de quantas estão preenchidas
    if (counter == 0 && filled < 9) {
        i = computerPlay();

        return i;
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

function reativarBotoes() {
    buttons.forEach(button => {
        button.style.display = 'inline-block';
    });
}