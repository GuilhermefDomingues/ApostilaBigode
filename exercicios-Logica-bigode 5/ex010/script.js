const botao = document.querySelector(".botao");
const inputTexto = document.querySelector(".inputTexto");
const resultado = document.querySelector(".resultado");

botao.addEventListener("click", () => {
  resultado.innerHTML = inputTexto.value;
});