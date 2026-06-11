// As maças custam R$1,30 cada se forem compradas menos de uma dúzia, e R$ 
// 1,00 se forem compradas pelo menos 12. Escreva um programa que leia 
// número de maçãs compradas, calcule e escreva  o custo total da compra

const quantidade = Number(prompt("Digite a quantidade de maçãs:"));

let preco;

if (quantidade < 12) {
  preco = 1.30;
} else {
  preco = 1.00;
}

const total = quantidade * preco;

console.log(`Total da compra: R$ ${total.toFixed(2)}`);