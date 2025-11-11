import readline from 'readline-sync';

let verificadorParImpar = readline.questionInt("\nDigite um número interio: ");

if (verificadorParImpar % 2 === 0) {
    if (verificadorParImpar > 0) {
        console.log(`\nO número ${verificadorParImpar} é par e positivo!`);
    } else if (verificadorParImpar < 0) {
        console.log(`\nO número ${verificadorParImpar} é par e negativo!`);
    }
} else {
    if (verificadorParImpar > 0) {
        console.log(`\nO número ${verificadorParImpar} é impar e positivo!`);
    } else if (verificadorParImpar < 0) {
        console.log(`\nO número ${verificadorParImpar} é impar e negativo!`);
    }
}