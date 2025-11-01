import readline from 'readline-sync';

console.log("╔═════════════════════════════════════════════╗");
console.log("║            Reajuste de salario              ║ ");
console.log("╠═════════════════════════════════════════════╣");
console.log("║Cód.║   Cargo                 ║   % Reajuste ║");
console.log("╠═════════════════════════════════════════════╣");
console.log("║  1 - Gerente...........................10%  ║");
console.log("║  2 - Vendedor...........................7%  ║");
console.log("║  3 - Supervisor.........................9%  ║");
console.log("║  4 - Motorista..........................6%  ║");
console.log("║  5 - Estoquista.........................5%  ║");
console.log("║  6 - Técnico de TI......................8%  ║");
console.log("╚═════════════════════════════════════════════╝");

let nomeColaborador = readline.question("\nDigite o nome do colaborador: ");
let codigoCargo = readline.questionInt("Digite o código do cargo (1 a 6): ");
let salario = readline.questionFloat("Digite o salário atual do colaborador: R$");

switch (codigoCargo) {
    case 1:
        salario *= 1.10;
        codigoCargo = "Gerente";
        console.log(`\nO colaborador ${nomeColaborador}, que ocupa o cargo de ${codigoCargo}, terá um novo salário de ${new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(salario)}.`);

        break;
    case 2:
        salario *= 1.07;
        codigoCargo = "Vendedor";
        console.log(`\nO colaborador ${nomeColaborador}, que ocupa o cargo de ${codigoCargo}, terá um novo salário de ${new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(salario)}.`);

        break;
    case 3:
        salario *= 1.09;
        codigoCargo = "Supervisor";
        console.log(`\nO colaborador ${nomeColaborador}, que ocupa o cargo de ${codigoCargo}, terá um novo salário de ${new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(salario)}.`);

        break;
    case 4:
        salario *= 1.06;
        codigoCargo = "Motorista";
        console.log(`\nO colaborador ${nomeColaborador}, que ocupa o cargo de ${codigoCargo}, terá um novo salário de ${new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(salario)}.`);

        break;
    case 5:
        salario *= 1.05;
        codigoCargo = "Estoquista";
        console.log(`\nO colaborador ${nomeColaborador}, que ocupa o cargo de ${codigoCargo}, terá um novo salário de ${new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(salario)}.`);

        break;
    case 6:
        salario *= 1.08;
        codigoCargo = "Técnico de TI";
        console.log(`\nO colaborador ${nomeColaborador}, que ocupa o cargo de ${codigoCargo}, terá um novo salário de ${new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(salario)}.`);

        break;
    default:
        console.log("\nCódigo de cargo inválido. por favor, insira um código entre 1 e 6.");
        break;
}