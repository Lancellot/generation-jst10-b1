import readline from 'readline-sync';

let nota1 = 0;
let nota2 = 0;
let media = 0;

nota1 = readline.questionFloat("Digite a primeira nota: ");
nota2 = readline.questionFloat("Digite a segunda nota: ");

media = (nota1 + nota2) / 2;


if (media >= 7) {
    console.log(`Aluno aprovado com média ${media.toFixed(1)}.`);
} else if (media == 6 ) {
    console.log(`Aluno reprovado com média ${media.toFixed(1)}. mas tem chance de recuperação.`);
} else {
    console.log(`Aluno reprovado com média ${media.toFixed(1)}.`);
}