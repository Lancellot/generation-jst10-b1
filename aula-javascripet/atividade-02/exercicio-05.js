import readline from 'readline-sync';

console.log("╔═════════════════════════════════════════════╗");
console.log("║             LANCHONETE                      ║ ");
console.log("╠═════════════════════════════════════════════╣");
console.log("║  1 - Cachorro Quente............. R$ 10.00  ║");
console.log("║  2 - X-Salada.................... R$ 15.00  ║");
console.log("║  3 - X-Bacon..................... R$ 18.00  ║");
console.log("║  4 - Bauru....................... R$ 12.00  ║");
console.log("║  5 - Refrigerante................ R$  8.00  ║");
console.log("║  6 - Suco de Laranja............. R$ 13.00  ║");
console.log("╠═════════════════════════════════════════════╣");
console.log("║      Escolha uma opção de 1 a 6             ║");
console.log("╚═════════════════════════════════════════════╝");

// achei esse layout de menu na internet e peguei para deixar mais bonito

let opcaoMenu = readline.questionInt("\nDigite o número da opção desejada: ");
let quantidade = readline.questionInt("\nDigite a quantidade desejada: ");

switch (opcaoMenu) {
    case 1:
        console.log(`\nVocê pediu ${quantidade} Cachorro Quente(s). Total a pagar: R$ ${(10.00 * quantidade).toFixed(2)}`); 
        break;

    case 2:
        console.log(`\nVocê pediu ${quantidade} X-Salada(s). Total a pagar: R$ ${(15.00 * quantidade).toFixed(2)}`); 
        break;

    case 3:
        console.log(`\nVocê pediu ${quantidade} X-Bacon(s). Total a pagar: R$ ${(18.00 * quantidade).toFixed(2)}`); 
        break;

    case 4:
        console.log(`\nVocê pediu ${quantidade} Bauru(s). Total a pagar: R$ ${(12.00 * quantidade).toFixed(2)}`); 
        break;
    
    case 5:
        console.log(`\nVocê pediu ${quantidade} Refrigerante(s). Total a pagar: R$ ${(8.00 * quantidade).toFixed(2)}`); 
        break;

    case 6:
        console.log(`\nVocê pediu ${quantidade} Suco de Laranja(s). Total a pagar: R$ ${(13.00 * quantidade).toFixed(2)}`); 
        break;
    
        default:
        console.log("\nOpção inválida. Por favor, escolha um número de 1 a 6.");
        break;
}