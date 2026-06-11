// Receba dois números e verifique se são iguais.
// Requisito Use operadores relacionais e o operador ternário para retornar  
// "São iguais" ou "Não são iguais" 

const n1 = Number(prompt("Digite o primeiro número:"));
const n2 = Number(prompt("Digite o segundo número:"));

const resultado = n1 === n2 ? "São iguais" : "Não são iguais";

console.log(resultado);