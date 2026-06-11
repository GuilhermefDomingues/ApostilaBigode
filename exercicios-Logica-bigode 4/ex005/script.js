// Peça ao usuário que insira sua idade. Verifique se ele está na faixa etária em 
// que o voto é obrigatório 18 a 70 anos) e exiba uma mensagem indicando se 
// ele é obrigado a votar

const idade = Number(prompt("Digite sua idade:"));

if (idade >= 18 && idade <= 70) {
  console.log("O voto é obrigatório.");
} else {
  console.log("O voto não é obrigatório.");
}