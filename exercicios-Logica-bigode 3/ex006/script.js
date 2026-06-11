// Receba o peso e a altura de uma pessoa e calcule o IMC(peso / altura²). 
// Classifique o IMC em:
// "Abaixo do peso" IMC  18.5,
// 24.9,
// "Sobrepeso" 25  29.9, ou
// "Peso normal" 18.5 
// "Obesidade" IMC  30

const peso = Number(prompt("Digite seu peso (kg):"));
const altura = Number(prompt("Digite sua altura (m):"));

const imc = peso / (altura ** 2);

const classificacao = imc < 18.5 ? "Abaixo do peso" : imc <= 24.9 ? "Peso normal" : imc <= 29.9 ? "Sobrepeso" : "Obesidade";

console.log(`IMC: ${imc.toFixed(2)} - ${classificacao}`);