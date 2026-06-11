// Receba uma palavra e verifique se ela é "JavaScript" . Caso seja, exiba 
// escolheu a linguagem correta!" , caso contrário, "Escolha outra linguagem" ."Você 
// Requisito Use um operador de comparação e o operador ternário para 
// exibir a mensagem.

const palavra = prompt("Digite uma palavra:");

const resultado = palavra === "JavaScript" ? "Você escolheu a linguagem correta!" : "Escolha outra linguagem";

console.log(resultado);