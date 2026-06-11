// Receba três notas e calcule a média final. Exiba se o aluno foi aprovado ou 
// reprovado considerando a média mínima 6.
// Requisito Use operadores aritméticos e o operador ternário para o 
// resultado.

const n1 = Number(prompt("Digite a primeira nota:"));
const n2 = Number(prompt("Digite a segunda nota:"));
const n3 = Number(prompt("Digite a terceira nota:"));

const media = (n1 + n2 + n3) / 3;

const resultado = media >= 6 ? "Aprovado" : "Reprovado";

console.log(`Média: ${media} - ${resultado}`);