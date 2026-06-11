const botao = document.querySelector(".botao");
const lista = document.querySelector(".lista");

botao.addEventListener("click", () => {
  const novoItem = document.createElement("li");

  novoItem.textContent = "Novo Item";

  lista.appendChild(novoItem);

});