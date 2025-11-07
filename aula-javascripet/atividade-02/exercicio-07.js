import readline from 'readline-sync';

console.log("╔════════════════════════════╗");
console.log("║       Calculadora          ║");
console.log("╠════════════════════════════╣");
console.log("║  Cód. ║    Operação        ║");
console.log("╠════════════════════════════╣");
console.log("║    1  ║ Soma               ║");
console.log("║    2  ║ Subtração          ║");
console.log("║    3  ║ Multiplicação      ║");
console.log("║    4  ║ Divisão            ║");
console.log("╚════════════════════════════╝");

let numero1 = readline.questionFloat("\nDigite o primeiro número: ");
let numero2 = readline.questionFloat("Digite o segundo número: ");
let codigoOperacao = readline.questionInt("Digite o código da operação: ");

switch (codigoOperacao) {
    case 1:
        console.log(`Resultado da soma ${numero1} + ${numero2} = ${(numero1 + numero2).toFixed(1)}`);
        break;
    case 2:
        console.log(`Resultado da subtração ${numero1} - ${numero2} = ${(numero1 - numero2).toFixed(1)}`);
        break;
    case 3:
        console.log(`Resultado da multiplicação ${numero1} * ${numero2} = ${(numero1 * numero2).toFixed(1)}`);
        break;
    case 4:
        console.log(`Resultado da divisão ${numero1} / ${numero2} = ${(numero1 / numero2).toFixed(1)}`);
        break;
    default:
        console.log("Operação inválida.");
        break;
}