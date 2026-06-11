// Receba a temperatura em graus Celsius e determine se o clima está 
// (abaixo de 15°C, "Agradável" (entre 15°C e 25°C ou 25°C.
// Requisito Use operadores relacionais e o operador ternário para a 
// classificação

const temp = Number(prompt("Digite a temperatura em °C:"));

const clima = temp < 15 ? "Frio" : temp <= 25 ? "Agradável" : "Quente";

console.log(clima);