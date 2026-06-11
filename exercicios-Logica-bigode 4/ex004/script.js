// Peça ao usuário que insira uma temperatura em graus Celsius. Verifique e 
// exiba uma mensagem de acordo com as seguintes condições:
// Se a temperatura for menor que 0, exiba "Muito Frio".
// Se estiver entre 0 e 20, exiba "Frio".
// Se estiver entre 21 e 30, exiba "Agradável".
// Se for maior que 30, exiba "Calor"

const temperatura = Number(prompt("Digite a temperatura em °C:"));

if (temperatura < 0) {
  console.log("Muito Frio");
} else if (temperatura <= 20) {
  console.log("Frio");
} else if (temperatura <= 30) {
  console.log("Agradável");
} else {
  console.log("Calor");
}