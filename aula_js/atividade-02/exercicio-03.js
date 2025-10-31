import readline from 'readline-sync';

let nomeDoador = readline.question("\nDigite o nome do doador: ");
let idade = readline.questionInt("Digite a idade do doador: ");
let primeiraDoacao = readline.question("Esta é a primeira doação? (True/False): ").toLowerCase();

if (idade >= 18 && idade <= 59 ) {
    console.log(`\n${nomeDoador} está apto(a) a doar sangue.`);
} else if (idade >= 60 && idade <= 69 && primeiraDoacao === 'false') {
    console.log(`\n${nomeDoador} está apto(a) a doar sangue.`); 
} else {
    console.log(`\n${nomeDoador} não está apto(a) a doar sangue.`);
}