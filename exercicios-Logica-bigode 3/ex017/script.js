// Receba uma temperatura e uma unidade ("C" para Celsius e "F" para 
// Fahrenheit) e converta a temperatura para a unidade oposta.
// Requisito Use operadores aritméticos e o operador ternário para a 
// conversão correta.

const temp = Number(prompt("Digite a temperatura:"));
const unidade = prompt("Digite a unidade (C ou F):");

const resultado = unidade.toUpperCase() === "C" ? (temp * 9/5) + 32 : (temp - 32) * 5/9;

console.log(`Temperatura convertida: ${resultado.toFixed(2)}`);