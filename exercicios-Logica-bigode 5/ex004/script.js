const botao = document.querySelector(".botao");

function mostrarAlerta() {
  alert("Você clicou no botão!");
}

botao.addEventListener("click", mostrarAlerta);