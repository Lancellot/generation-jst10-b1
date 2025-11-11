import readline from 'readline-sync';

let numero = 0;
let numeroMutiplo3 = 0;
let contador = 0;
let contadorTotal = 0;

do {
    numero = readline.questionInt("\nDigite um numero: ");

    if (numero % 3 === 0 && numero != 0) {
        numeroMutiplo3 += numero;
        contadorTotal++;
    }
    contador++;
} while (numero != 0);

numeroMutiplo3 /= contadorTotal;

console.log(`\nA média de todos os números múltiplos de 3 é: ${numeroMutiplo3.toFixed(2)}`)