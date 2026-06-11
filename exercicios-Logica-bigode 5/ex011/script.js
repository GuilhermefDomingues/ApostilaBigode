const botao = document.querySelector(".botao");
const mensagem = document.querySelector(".mensagem");

botao.addEventListener("click", () => {
  mensagem.innerHTML =`
  <strong>Texto em negrito</strong> e <i>itálico</i>`
});