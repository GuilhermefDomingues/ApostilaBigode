// Peça ao usuário que insira o valor de uma compra. Se o valor for superior a 
// R$100, aplique um desconto de 10% e exiba o valor final. Caso contrário, exiba 
// o valor original

const valor = Number(prompt("Digite o valor da compra:"));

if (valor > 100) {
  const valorFinal = valor * 0.9;
  console.log(`Valor com desconto: R$ ${valorFinal.toFixed(2)}`);
} else {
  console.log(`Valor final: R$ ${valor.toFixed(2)}`);
}