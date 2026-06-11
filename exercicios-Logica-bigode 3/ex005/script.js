// Receba a idade de uma pessoa e verifique se ela pode tirar carteira de 
// habilitação (idade mínima de 18 anos).
// Lógica de Programação com JavaScript
// Requisito Use um operador relacional e o operador ternário para retornar 
// "Pode tirar habilitação" ou  "Não pode tirar habilitação" .

const idade = Number(prompt("Digite sua idade:"));

const resultado =
  idade >= 18 ? "Pode tirar habilitação" : "Não pode tirar habilitação";

console.log(resultado);