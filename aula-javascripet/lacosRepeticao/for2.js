import readline from 'readline-sync';

const cadastro = [];

for (let i = 0 ; i < 1 ; i++) {

    let nome = readline.question("Digite o seu nome: ");
    let idade = readline.questionInt("Digite a sua idade: ");
    
    cadastro[i] = {nome, idade};

}
cadastro[1] = {nome: "Ana", idade: 25, carro: "Fusca"};
console.table(cadastro);