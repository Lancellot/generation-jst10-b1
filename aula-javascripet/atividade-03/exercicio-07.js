import readline from 'readline-sync';

const vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];
const ponteiro = 10; 

let numero = readline.questionInt("Digite o número que você deseja encontrar: ");

let encontrado = false; 

for (let contador = 0; contador < ponteiro; contador++) {
    if (numero === vetor[contador]) {
        console.log(`\nO número ${numero} está localizado na posição: ${contador}`);
        encontrado = true;
        break;
    }
}

if (!encontrado) {
    console.log(`\nO número ${numero} não foi encontrado!`);
}
