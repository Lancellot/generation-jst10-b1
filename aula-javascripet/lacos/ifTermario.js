import readline from 'readline-sync';

let nota1 = readline.questionFloat("Digite a primeira nota: ");
let nota2 = readline.questionFloat("Digite a segunda nota: ");

let media = (nota1 + nota2) / 2;

// como usar operador ternario (condição) ? mensagem se true : mensagem se false
console.log((media >= 6) ? `Parabéns, você foi aprovado! com média ${media.toFixed(1)}.` : `Infelizmente, você foi reprovado.`);