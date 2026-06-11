// Receba uma nota e determine se o aluno foi aprovado (nota >= 60) ou 
// reprovado.
// Requisito: Use operadores relacionais e o operador ternário

const nota = Number(prompt("Digite a nota:"));

const resultado = nota >= 60 ? "Aprovado" : "Reprovado";

console.log(resultado);