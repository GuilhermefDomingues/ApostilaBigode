const botao = document.querySelector(".botao");
const titulo = document.querySelector(".titulo");

botao.addEventListener("click", () => {
  titulo.textContent = "Atualizado!";
});