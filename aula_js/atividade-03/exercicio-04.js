import readline from 'readline-sync';

let continua = true;
let totalIdade = 0;
let contador = 0;
let mulherTransFront = 0;
let homemTransMaior40 = 0;
let naoBinarioMenor30 = 0;
let backendDev = 0;

while (continua) {
    let idade = readline.questionInt("Digite sua idade: ");

    console.clear();
    console.log("=======================================");
    console.log("\nIdentidade de Gênero (Número Inteiro):");
    console.log("=======================================");
    console.log("1 – Mulher Cis");
    console.log("2 – Homem Cis");
    console.log("3 – Não Binário");
    console.log("4 – Mulher Trans");
    console.log("5 – Homem Trans");
    console.log("6 – Outros");
    console.log("=======================================");

    let genero = readline.questionInt("Digite o número correspondente ao seu gênero: ");

    if (genero < 1 || genero > 6) {
        console.log("❌ Opção inválida para gênero. Tente novamente.");
        readline.question("Pressione ENTER para tentar novamente...");
        continue;
    }

    console.clear();
    console.log("=====================================");
    console.log("         ÁREA DE ATUAÇÃO DEV");
    console.log("=====================================");
    console.log("1 – Backend");
    console.log("2 – Frontend");
    console.log("3 – Mobile");
    console.log("4 – FullStack");
    console.log("=====================================");

    let opcaoDev = readline.questionInt("\nDigite o número correspondente à sua área: ");


    switch (genero) {
        case 1: // Mulher Cis  
            if (opcaoDev === 2) mulherTransFront++;
            else if (opcaoDev === 1) backendDev++;
            break;

        case 2: // Homem Cis
            if (opcaoDev === 3 && idade > 40) homemTransMaior40++;
            else if (opcaoDev === 1) backendDev++;
            break;

        case 3: // Não Binário
            if (opcaoDev === 4 && idade < 30) naoBinarioMenor30++;
            else if (opcaoDev === 1) backendDev++;
            break;

        case 4: // Mulher Trans
            if (opcaoDev === 2) mulherTransFront++;
            else if (opcaoDev === 1) backendDev++;
            break;

        case 5: // Homem Trans
            if (opcaoDev === 3 && idade > 40) homemTransMaior40++;
            else if (opcaoDev === 1) backendDev++;
            break;

        case 6: // Outros
            if (opcaoDev === 1) backendDev++;
            break;
    }

    totalIdade += idade;
    contador++;
    console.clear();
    continua = readline.keyInYN("Deseja continuar? ");
}

let mediaIdade = totalIdade / contador;

console.clear();
console.log("=====================================");
console.log("        RESULTADOS DA PESQUISA");
console.log("=====================================\n");
console.log(`O número de pessoas desenvolvedoras Backend: .......... ${backendDev}`);
console.log(`O número de Mulheres Cis e Trans desenvolvedoras Frontend: .......... ${mulherTransFront}`);
console.log(`O número de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: .......... ${homemTransMaior40}`);
console.log(`O número de Não Binários desenvolvedores FullStack menores de 30 anos: .......... ${naoBinarioMenor30}`);
console.log(` O número total de pessoas que responderam à pesquisa: .......... ${contador}`);
console.log(` A média de idade das pessoas que responderam à pesquisa: .......... ${mediaIdade.toFixed(2)} anos`);
console.log("\n=====================================");
console.log("        FIM DO RELATÓRIO");
console.log("=====================================");
