const botao = document.querySelector(".botao");
const mensagem = document.querySelector(".mensagem");

function digaOla(nome) {

  mensagem.textContent = `Olá, ${nome}!`;

}

botao.addEventListener("click", () => {

  const nome = prompt("Digite seu nome:");

  digaOla(nome);

});