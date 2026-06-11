// Peça ao usuário que insira uma temperatura em graus Celsius. Exiba a 
// temperatura equivalente em Fahrenheit. A fórmula de conversão:
// Fahrenheit  Celsius * 9/5  32

const celsius = Number(prompt("Digite a temperatura em °C:"));

const fahrenheit = (celsius * 9 / 5) + 32;

console.log(`Temperatura em Fahrenheit: ${fahrenheit.toFixed(2)}°F`);