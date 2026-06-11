const inputTarefa = document.querySelector(".inputTarefa");
const botao = document.querySelector(".botao");
const lista = document.querySelector(".lista");

botao.addEventListener("click", () => {
  const textoTarefa = inputTarefa.value;
  const novoItem = document.createElement("li");

  novoItem.textContent = textoTarefa;
  lista.appendChild(novoItem);
  inputTarefa.value = "";

});