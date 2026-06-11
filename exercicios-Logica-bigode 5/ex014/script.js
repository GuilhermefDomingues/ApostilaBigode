const botao = document.querySelector(".botao");
const paragrafo = document.querySelector(".paragrafo");

botao.addEventListener("click", () => {

  paragrafo.classList.toggle("ativo");

  if (paragrafo.classList.contains("ativo")) {

    botao.textContent = "Desativar";

  } else {

    botao.textContent = "Ativar";

  }

});