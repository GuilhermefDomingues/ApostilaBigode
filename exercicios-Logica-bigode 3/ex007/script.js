// Receba um número e determine se ele é positivo, negativo ou zero.
// Requisito Use operadores relacionais e o operador ternário para a 
// classificação.

const numero = Number(prompt("Digite um número:"));

const resultado = numero > 0 ? "Positivo" : numero < 0 ? "Negativo" : "Zero";

console.log(resultado);