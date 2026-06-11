// Peça ao usuário que insira três números inteiros diferentes. Use operadores 
// relacionais para determinar qual é o maior número e exiba o resultado

const n1 = Number(prompt("Digite o primeiro número:"));
const n2 = Number(prompt("Digite o segundo número:"));
const n3 = Number(prompt("Digite o terceiro número:"));

if (n1 > n2 && n1 > n3) {
  console.log(`O maior número é ${n1}`);
} else if (n2 > n1 && n2 > n3) {
  console.log(`O maior número é ${n2}`);
} else {
  console.log(`O maior número é ${n3}`);
}