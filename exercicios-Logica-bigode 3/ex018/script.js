// Receba uma letra e determine se é minúscula ou maiúscula.
// Requisito Use um método para conversão e o operador ternário para exibir 
// o tipo de letra

const letra = prompt("Digite uma letra:");

const resultado = letra === letra.toUpperCase() ? "Maiúscula" : "Minúscula";

console.log(resultado);