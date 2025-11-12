import readlineSync from 'readline-sync';

let quantidade: number;
let altura: number;
let nome: string;

quantidade = readlineSync.questionInt('\nDigite a quantidade: ', {
    limitMessage: 'Digite um número inteiro!',
});

console.log(`A quantidade é ${quantidade}`);

altura = readlineSync.questionFloat('\nDigite sua altura: ', {
    limitMessage: 'Digite um número decimal!',
});

nome = readlineSync.question('\nDigite seu nome: ');

console.log(`Seu nome é ${nome} e sua altura é ${altura}`);
