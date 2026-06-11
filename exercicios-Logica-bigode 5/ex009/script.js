const botao = document.querySelector(".botao");
const resultado = document.querySelector(".resultado");

function formatarTexto(texto) {
  const textoMaiusculo = texto.toUpperCase();
  const quantidadeCaracteres = texto.length;

  return `${textoMaiusculo} (${quantidadeCaracteres} caracteres)`;

}

botao.addEventListener("click", () => {
  const texto = prompt("Digite um texto:");
  const textoFormatado = formatarTexto(texto);
  resultado.textContent = textoFormatado;
});