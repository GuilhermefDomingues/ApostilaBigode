// Peça ao usuário que insira a velocidade (em km/h) e o tempo (em horas) de 
// uma viagem. Calcule e exiba a distância percorrida, usando a fórmula:
// Distância=Velocidade×Tempo

const velocidade = Number(prompt("Digite a velocidade (km/h):"));
const tempo = Number(prompt("Digite o tempo (horas):"));

const distancia = velocidade * tempo;

console.log(`Distância percorrida: ${distancia} km`);