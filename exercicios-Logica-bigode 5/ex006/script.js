const botao = document.querySelector(".botao");
const resultado = document.querySelector(".resultado");

function converterDolarParaReal(valorDolar) {

  const taxa = 5.65;

  return valorDolar * taxa;
}

botao.addEventListener("click", () => {

  const valor = Number(prompt("Digite o valor em dólar:"));

  const valorConvertido = converterDolarParaReal(valor);

  resultado.textContent =
    `Valor em reais: R$ ${valorConvertido.toFixed(2)}`;

});