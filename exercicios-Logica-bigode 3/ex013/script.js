// Receba um nome e verifique se ele tem mais de 5 caracteres.
// Requisito Use a propriedade .length e o operador ternário para retornar
// "Nome longo" ou "Nome curto" .

const nome = prompt("Digite um nome:");

const resultado = nome.length > 5 ? "Nome longo" : "Nome curto";

console.log(resultado);