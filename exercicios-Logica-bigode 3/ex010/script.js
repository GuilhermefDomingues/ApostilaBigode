// Escreva um programa que recebe um número e verifica se ele é par ou 
// ímpar.
// Requisito Use o operador de resto 
// "Par" ou "Ímpar" 

const numero = Number(prompt("Digite um número:"));

const resultado = numero % 2 === 0 ? "Par" : "Ímpar";

console.log(resultado);