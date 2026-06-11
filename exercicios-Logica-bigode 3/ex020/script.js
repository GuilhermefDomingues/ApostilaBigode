// Receba o preço de um produto e classifique-o como 
// 20, "Médio" (entre 20 e 100) ou "Barato" (menos de "Caro" (acima de 100.
// Requisito Use operadores relacionais e o operador ternário para a 
// classificação.

const preco = Number(prompt("Digite o preço:"));

const classificacao = preco < 20 ? "Barato" : preco <= 100 ? "Médio" : "Caro";

console.log(classificacao);