import readline from 'readline-sync';

let numero = 0;
let numTotal = 0;

do {
    numero = readline.questionInt("\nDigite um numero: ");
    if( numero > 0) {
        numTotal += numero;
    }
} while (numero != 0);

console.log(`\nA soma dos números positivos é: ${numTotal}`);