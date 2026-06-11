// Peça ao usuário que insira três valores monetários. Calcule a média desses 
// valores e exiba o resultado formatado em moeda brasileira R$.

const v1 = Number(prompt("Digite o primeiro valor:"));
const v2 = Number(prompt("Digite o segundo valor:"));
const v3 = Number(prompt("Digite o terceiro valor:"));

const media = (v1 + v2 + v3) / 3;

console.log(
  media.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  })
);