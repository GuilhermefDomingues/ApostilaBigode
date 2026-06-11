// Peça ao usuário que insira uma nota de 0 a 100. Classifique a nota em 
// conceitos de acordo com a tabela abaixo e exiba o conceito:
// Nota maior ou igual a 90 "A"
// Nota entre 80 e 89 "B"
// Nota entre 70 e 79 "C"
// Nota entre 60 e 69 "D"
// Nota abaixo de 60 "F

const nota = Number(prompt("Digite uma nota de 0 a 100:"));

if (nota >= 90) {
  console.log("A");
} else if (nota >= 80) {
  console.log("B");
} else if (nota >= 70) {
  console.log("C");
} else if (nota >= 60) {
  console.log("D");
} else {
  console.log("F");
}