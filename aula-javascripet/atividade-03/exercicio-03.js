import readline from "readline-sync";

let continua = true;
let menor21 = 0;
let maior50 = 0;

while (continua) {

    let idade = readline.questionInt("Digite uma idade: ");
    if (idade > 0){
        if (idade < 21) {
            menor21++;
        } else if (idade > 50) {
            maior50++;
        }
    } else {
        console.log(" Fim da execução ");
        continua = false;
    }
}

console.log(`\nTotal de pessoas com menos de 21 anos: ${menor21}`);
console.log(`Total de pessoas com mais de 50 anos: ${maior50}`);