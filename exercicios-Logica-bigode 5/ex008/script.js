const botao = document.querySelector(".botao");
const resultado = document.querySelector(".resultado");

function somar(numero1, numero2) {
  return numero1 + numero2;
}

botao.addEventListener("click", () => {
  const numero1 = Number(prompt("Digite o primeiro número:"));
  const numero2 = Number(prompt("Digite o segundo numero:"));

  const soma = somar(numero1, numero2);

  resultado.textContent = `Resultado da soma: ${soma}`;

});