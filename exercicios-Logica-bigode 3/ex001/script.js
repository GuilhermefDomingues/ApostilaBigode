// Receba a idade de uma pessoa e determine se ela pode entrar em um show 
// restrito para maiores de 16 anos.
// Requisito Use operadores relacionais e o operador ternário para retornar 
// "Pode entrar" ou "Não pode entrar" .

const idade = Number(prompt("Digite sua idade:"));

const resultado = idade >= 16 ? "Pode entrar" : "Não pode entrar";

console.log(resultado);