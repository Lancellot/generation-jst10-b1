import readline from 'readline-sync';

let numeroA = readline.questionInt("\nDigite o primeiro número: ");
let numeroB = readline.questionInt("\nDigite o segundo número: ");
let numeroC = readline.questionInt("\nDigite o terceiro número: ");

let somaAB = numeroA + numeroB;

if (somaAB > numeroC) {
    console.log(`\nA soma de ${numeroA} + ${numeroB} é maior que ${numeroC}`);
} else if (somaAB === numeroC) {
    console.log(`\nA soma de ${numeroA} + ${numeroB} é igual a ${numeroC}.`);
} else {
    console.log(`\nA soma de ${numeroA} + ${numeroB} é menor que ${numeroC}.`);
}
//Fiz a versão com operador ternários também, só para treinar.
/*
console.log(
    (somaAB > numeroC) 
    ? `\nA soma de ${numeroA} + ${numeroB} é maior que ${numeroC}` 
    : (somaAB === numeroC)
        ? `\nA soma de ${numeroA} + ${numeroB} é igual a ${numeroC}` 
        : `\nA soma de ${numeroA} + ${numeroB} é menor que ${numeroC}`
);
*/