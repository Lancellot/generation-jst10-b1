import readline from 'readline-sync';

let salario = 0;
let abono = 0;

salario = readline.questionFloat("Digite o salario do colaborador: R$ ");
abono = readline.questionFloat("Digite o valor do abono: R$ ");

salario += abono;

console.log(`\nSalario atualizado do colaborador:\t${new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
}).format(salario)}`);