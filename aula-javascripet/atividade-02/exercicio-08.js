import readline from 'readline-sync';

console.log("╔════════════════════════════╗");
console.log("║           Banco            ║");
console.log("╠════════════════════════════╣");
console.log("║  Cód. ║    Operação        ║");
console.log("╠════════════════════════════╣");
console.log("║    1  ║ Saldo              ║");
console.log("║    2  ║ Saque              ║");
console.log("║    3  ║ Depósito           ║");
console.log("╚════════════════════════════╝");

let saldo = 1000.0;

let codigoOperacao = readline.questionInt("\nDigite o código da operação: ");

switch (codigoOperacao) {
    case 1:
        console.log(`\nSeu salado atual é de ${new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(saldo)}`);
        
        break;
    case 2:
        let valorSaque = readline.questionFloat("\nDigite o valor do saque: R$");

        if (valorSaque <= saldo) {
            saldo -= valorSaque;
            console.log(`\nSaque realizado com sucesso! Seu novo saldo é de ${new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(saldo)}`);
        } else {
            console.log("\nSaldo insuficiente para realizar o saque.");
        }

        break;
    case 3:
        let valorDeposito = readline.questionFloat("\nDigite o valor do depósito: R$");
        saldo += valorDeposito;
        console.log(`\nDepósito realizado com sucesso! Seu novo saldo é de ${new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(saldo)}`);

        break
    default:
        console.log("\nOperação inválida. Por favor, digite um código válido.");
        break;
}