import readline from 'readline-sync';

let numeropar = 0;
let numeroimpar = 0;

for ( let contador = 0; contador < 10; contador++) {
    let numero = readline.questionInt(`Digite o ${contador + 1}º numero: `);

    if (numero % 2 === 0) {
        numeropar++;
    } else {
        numeroimpar++;
    }
}

console.log(`Total de números pares: ${numeropar}`);
console.log(`Total de números ímpares: ${numeroimpar}`);