const botao = document.querySelector(".botao");

function calcularQuadrado(numero) {
  return numero * numero;
}

botao.addEventListener("click", () => {

  const resultado = calcularQuadrado(5);

  alert(`O quadrado é: ${resultado}`);

});