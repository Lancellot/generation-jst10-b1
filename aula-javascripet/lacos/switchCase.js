import readline from "readline-sync";

console.log("# ## ### #### #########   Menu   ########## #### ### ## #");
console.log("--Digite 1 para ver Indicação de um Livro--");
console.log("--Digite 2 para ler uma Frase Motivacional--");
console.log("--Digite 3 para receber uma Indicação de música--");

let opcao = readline.questionInt("\nEscolha uma das opções acima: ");

switch (opcao) {
    case 1:
        let validacao = readline.question("voce le livros? (s/n) ");
        if (validacao.toLowerCase() === "s") {
            console.log("Recomendo 'O Alquimista' de Paulo Coelho.");
        } else {
            console.log("vai embora");
        }
        break;

    case 2:
        console.log("Frase motivacional: Se você cair, levante! Não dá para andar deitado.");
        break;

    case 3:
        console.log("Música recomendada: 'Bohemian Rhapsody' - Queen");
        break;
    
    default:
        console.log("Opção inválida. Por favor, escolha 1, 2 ou 3.");
        break;
}