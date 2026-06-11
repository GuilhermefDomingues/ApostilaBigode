// Receba a quantidade de horas 023 e determine se é manhã 511, tarde 
// 1217, noite 1823 ou madrugada 04.
// Requisito Use operadores relacionais e o operador ternário para exibir o 
// período do dia

const hora = Number(prompt("Digite a hora (0-23):"));

const periodo = hora >= 5 && hora <= 11 ? "Manhã" : hora >= 12 && hora <= 17 ? "Tarde" : hora >= 18 && hora <= 23 ? "Noite" : hora >= 0 && hora <= 4 ? "Madrugada" : "Hora inválida";

console.log(periodo);