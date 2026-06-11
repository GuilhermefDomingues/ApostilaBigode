// Escreva um programa que recebe a idade de uma pessoa e verifica se ela é 
// maior de idade 18 anos ou mais).
// Requisito Use um operador relacional e o operador ternário para retornar 
// "Maior de idade" ou "Menor de idade" 

const idade = Number(prompt("Digite sua idade:"));

const resultado = idade >= 18 ? "Maior de idade" : "Menor de idade";

console.log(resultado);