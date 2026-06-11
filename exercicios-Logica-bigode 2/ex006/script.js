// Peça ao usuário que insira seu primeiro nome. Exiba o nome em letras 
// maiúsculas e, em seguida, mostre a quantidade de letras que ele possui.

const nome = prompt("Digite seu primeiro nome: ");

const maiusculo = nome.toUpperCase();
const quantidade = nome.length;

console.log(maiusculo);
console.log(`Quantidade de letras: ${quantidade}`);