// Receba a idade de uma pessoa e determine se ela é maior de idade 
// considerando duas regiões diferentes (por exemplo, Brasil, onde a 
// maioridade é 18, e EUA, onde é 21.
// Requisito Use operadores relacionais e o operador ternário para exibir se é 
// maior de idade em cada região

const idade = Number(prompt("Digite a idade:"));

const brasil = idade >= 18 ? "Maior de idade no Brasil" : "Menor de idade no Brasil";
const eua = idade >= 21 ? "Maior de idade nos EUA" : "Menor de idade nos EUA";

console.log(brasil);
console.log(eua);