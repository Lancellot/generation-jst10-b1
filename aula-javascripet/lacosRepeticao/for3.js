import readline from 'readline-sync';

let numeros = readline.questionInt("calcule a tabuada de qual número? ");

for (let contador = 1 ; contador <= 10 ; contador++) {

    console.log(`${numeros} x ${contador} = ${numeros * contador}`);

};