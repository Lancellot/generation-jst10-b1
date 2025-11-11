import readline from 'readline-sync';

let nota1 = 0;
let nota2 = 0;
let nota3 = 0;
let nota4 = 0;

let aluno1 = "";
let aluno2 = "";
let aluno3 = "";
let aluno4 = "";

let media = 0;

aluno1 = readline.question("\nDigite o nome do primeiro aluno: ");
nota1 = readline.questionFloat(`Digite a nota de ${aluno1}: `);

aluno2 = readline.question("\nDigite o nome do segundo aluno: ");
nota2 = readline.questionFloat(`Digite a nota de ${aluno2}: `);

aluno3 = readline.question("\nDigite o nome do terceiro aluno: ");
nota3 = readline.questionFloat(`Digite a nota de ${aluno3}: `);

aluno4 = readline.question("\nDigite o nome do quarto aluno: ");
nota4 = readline.questionFloat(`Digite a nota de ${aluno4}: `);

media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log(`\nA média das notas dos alunos é de ${media.toFixed(1)}.`);