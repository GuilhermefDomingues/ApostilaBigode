// Peça ao usuário que insira sua idade. Verifique e exiba o tipo de ingresso 
// apropriado:
// Menores de 12 anos: "Infantil".
// Entre 12 e 17 anos: "Adolescente".
// Entre 18 e 64 anos: "Adulto".
// Acima de 64 anos: "Sênior"

const idade = Number(prompt("Digite sua idade:"));

if (idade < 12) {
  console.log("Infantil");
} else if (idade <= 17) {
  console.log("Adolescente");
} else if (idade <= 64) {
  console.log("Adulto");
} else {
  console.log("Sênior");
}