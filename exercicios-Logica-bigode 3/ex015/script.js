// Receba uma nota de 0 a 10 e exiba entre 7 e 8, "Excelente"
// (nota 9), "Regular" (nota entre 5 e 6), ou "Bom" (nota) "Insuficiente" (nota abaixo de 5.)
// Requisito Use operadores relacionais e o operador ternário para a 
// classificação.

const nota = Number(prompt("Digite a nota (0 a 10):"));

const classificacao = nota < 5 ? "Insuficiente" : nota <= 6 ? "Regular" : nota <= 8 ? "Bom" : "Excelente";

console.log(classificacao);