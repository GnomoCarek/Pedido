let tentativas = 0;

let mensagens = [
    "<h3>Tu não ta com fome? eu to morrendo de fome! 😉</h3>",
    "<h3>Ah, vai! Você sabe que quer clicar no 'Sim'. 😏</h3>",
    "<h3>Tá fugindo, Eu pago! 😅</h3>",
    "<h3>Mentira, Podemos dividir! 💕</h3>",
    "<h3>Quanto mais você tenta fugir, mais divertido fica! 😂</h3>",
    "<h3>Parar de resistir também é uma forma de vencer! 😜</h3>",
    "<h3>Você sabe que está destinado a clicar no 'Sim'. Por que negar o inevitável? 🍕</h3>",
    "<h3>O botão 'Sim' tá tão bonitinho... Dê uma chance pra ele. 🥰</h3>",
    "<h3>Eu já cliquei no 'Sim' mentalmente por você... Só falta você clicar! 😌</h3>",
    "<h3>Chega de brincadeiras! Clica no 'Sim' e seja feliz! 😵‍💫</h3>"
];

function sim(){
    let btn = document.getElementById("container");
    let mensagem = document.getElementById("mensagem");
    mensagem.innerHTML = "<h3>Parabéns pela conquista 😍🍕🎉🎉</h3>";
    mensagem.style.display = "block";
    btn.style.background = "hotpink";

}
function trocaPosicao(min, max){
    return(Math.random() * (min - max) + min) + "%";
}
function desvia(){
    let btn = document.getElementById("btn-nao");
    btn.style.position = "absolute";
    btn.style.top = trocaPosicao(50, 80);
    btn.style.left = trocaPosicao(50, 80);
    btn.style.transform = `rotate(${Math.random() * 360}deg)`;

    tentativas++;

    if (tentativas <= mensagens.length){
        let mensagem = document.getElementById("mensagem");
        mensagem.innerHTML = mensagens[tentativas -1];
        mensagem.style.display = "block";
    } else {
        let mensagem = document.getElementById("mensagem");
        mensagem.innerHTML = "<h3>O Esse pedido é inevitavel 🍕!</h3>";
        mensagem.style.display = "block";
    }
}

