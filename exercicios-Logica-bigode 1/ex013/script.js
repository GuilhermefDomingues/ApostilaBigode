let a = prompt("Digite o primeiro valor:");
let b = prompt("Digite o segundo valor:");

let c = a;
a = b;
b = c;

console.log(`Primeiro valor: ${a}`);
console.log(`Segundo valor: ${b}`);