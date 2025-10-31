import readline from 'readline-sync';

let n1 = 0;
let n2 = 0;
let n3 = 0;
let n4 = 0;

let prodDiferenca = 0;

n1 = readline.questionFloat("\nDigite o primeiro numero: ");
n2 = readline.questionFloat("\nDigite o segundo numero: ");
n3 = readline.questionFloat("\nDigite o terceiro numero: ");
n4 = readline.questionFloat("\nDigite o quarto numero: ");

prodDiferenca = (n1 * n2) - (n3 * n4);

console.log(`\nO produto da diferença dos numeros é de ${prodDiferenca.toFixed(1)}.`);