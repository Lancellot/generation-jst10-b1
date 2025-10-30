import readline from 'readline-sync';

let nome;
let idade;
let senha;
let email;

nome = readline.question("Digite seu nome: ");
idade = readline.questionInt("Digite sua idade: ");
senha = readline.questionNewPassword("crie uma senha: " );
email = readline.questionEMail("Digite seu email: ");


console.log(`\nNome:\t${nome}\nIdade:\t${idade}\nSenha:\t${senha}\nEmail:\t${email}\n`);