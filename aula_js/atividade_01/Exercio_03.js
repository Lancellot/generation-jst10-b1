import readline from 'readline-sync';

let salarioBruto = 0;
let adcNoturno = 0;
let hrsExtras = 0;
let desconto = 0;
let salarioLiq = 0;

salarioBruto = readline.questionFloat("\nDigite o salário bruto do colaborador: R$: ");
adcNoturno = readline.questionFloat("\nDigite o valor do adicional noturno: R$: ");
hrsExtras = readline.questionFloat("\nDigite o valor das horas extras: ");
desconto = readline.questionFloat("\nDigite o valor do desconto R$: ");

salarioLiq = salarioBruto + adcNoturno + (hrsExtras * 5) - desconto;

console.log(`\nO salário líquido do colaborador é de\t${new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
}).format(salarioLiq)}.`);