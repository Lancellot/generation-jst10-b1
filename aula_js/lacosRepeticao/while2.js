import readline from 'readline-sync';

const cadastro = [];

let i = 0;

let continua = readline.keyInYN("Deseja cadastrar uma pessoa? ");

while (continua) {

    let nome = readline.question("Digite o seu nome: ");
    let idade = readline.questionInt("Digite a sua idade: ");
    
    cadastro[i++] = {nome, idade};

    continua = readline.keyInYN("Deseja cadastrar outra pessoa? ");

}

console.table(cadastro);