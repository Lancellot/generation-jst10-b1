import readline from 'readline-sync';

let numeroMenor = readline.questionInt("Digite o primeiro numero do intervalo: ");
let numeroMaior = readline.questionInt("Digite o ultimo numero do intervalo: ");

if (numeroMenor >= numeroMaior) {
    console.log("Intervalo inválido!");
} else {
    for (let contador = numeroMenor; contador <= numeroMaior; contador++) {
        if (contador % 3 === 0 && contador % 5 === 0) {
            console.log(`${contador} é múltiplo de 3 e 5.`);
        }
    }
}