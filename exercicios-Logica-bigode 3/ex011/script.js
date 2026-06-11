// Receba o valor total da compra e um código de desconto. Se o código for 
// "DESC10" , aplique um desconto de 10%, caso contrário, mantenha o valor 
// original.
// 2
// Lógica de Programação com JavaScript
// Requisito Use operadores relacionais e o operador ternário para calcular e 
// exibir o preço final

const total = Number(prompt("Digite o valor da compra:"));
const codigo = prompt("Digite o código de desconto:");

const precoFinal = codigo === "DESC10" ? total * 0.9 : total;

console.log(`Preço final: R$ ${precoFinal.toFixed(2)}`);