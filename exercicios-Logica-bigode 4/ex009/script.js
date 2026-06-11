// Peça ao usuário que insira uma temperatura em graus Fahrenheit. Calcule e 
// exiba a temperatura equivalente em graus Celsius, utilizando a fórmula:
// Celsius = Fahrenheit−32  9/5
// Exiba o resultado com duas casas decimais

const fahrenheit = Number(prompt("Digite a temperatura em °F:"));

const celsius = (fahrenheit - 32) * 5 / 9;

console.log(`Temperatura em Celsius: ${celsius.toFixed(2)}°C`);