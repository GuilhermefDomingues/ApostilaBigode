const botao = document.querySelector(".botao");
const paragrafo = document.querySelector(".paragrafo");

botao.addEventListener("click", () => {

  paragrafo.classList.toggle("oculto");

  if (paragrafo.classList.contains("oculto")) {
    paragrafo.style.display = "none";
  } else {
    paragrafo.style.display = "block";
  }

});