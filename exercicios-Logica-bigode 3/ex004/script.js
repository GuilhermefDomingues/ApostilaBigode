// Escreva um programa que compara as idades de duas pessoas e exibe 
// quem é mais velho ou se têm a mesma idade.
// Requisito Use operadores relacionais e o operador ternário para a 
// comparação


const idade1 = Number(prompt("Digite a idade da primeira pessoa:"));
const idade2 = Number(prompt("Digite a idade da segunda pessoa:"));

const resultado = idade1 > idade2 ? "A primeira pessoa é mais velha" : idade2 > idade1 ? "A segunda pessoa é mais velha" : "Ambas têm a mesma idade";

console.log(resultado);