import readline from 'readline-sync';

let continua = true;
let cont = 0;

while (continua) {

    console.log(`miau ${++cont}`);

    continua = readline.keyInYN("Deseja continuar? ");

};
