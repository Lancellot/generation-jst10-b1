import readline from 'readline-sync';

console.log("# ## ### #### #########   Menu   ########## #### ### ## #");
console.log("--    Favor digitar uma das opções abaixo:");
console.log("--            Vertebrado");
console.log("--            Invertebrado");

let tipoAnimal = readline.question("\nEscolha uma das opção acima: ").toLowerCase();

if (tipoAnimal === "vertebrado") {
    tipoAnimal = readline.question("\nEscolha uma das opções: Ave ou Mamífero? ").toLowerCase();

    if (tipoAnimal === "ave") {
        tipoAnimal = readline.question("\nEscolha uma das opções: Carnivoro ou Onivoro? ").toLowerCase();

        if (tipoAnimal === "carnivoro") {
            console.log("\nÁguia");
        } else if (tipoAnimal === "onivoro") {
            console.log("\nPomba");
        }
    } else if (tipoAnimal === "mamífero") {
        tipoAnimal = readline.question("\nEscolha uma das opções: herbivoro ou Onivoro? ").toLowerCase();

        if (tipoAnimal === "onivoro") {
            console.log("\nHomem");
        } else if (tipoAnimal === "herbivoro") {
            console.log("\nVaca");
        }
    }
} else if (tipoAnimal === "invertebrado") {
    tipoAnimal = readline.question("\nEscolha uma das opções: Inseto ou Anelideo? ").toLowerCase();

    if (tipoAnimal === "inseto") {
        tipoAnimal = readline.question("\nEscolha uma das opções: Hematofago ou Herbivoro? ").toLowerCase();

        if (tipoAnimal === "hematofago") {
            console.log("\nPulga");
        } else if (tipoAnimal === "herbivoro") {
            console.log("\nLagarta");
        }
    } else if (tipoAnimal === "anelideo") {
        tipoAnimal = readline.question("\nEscolha uma das opções: Hematofago ou Onivoro? ").toLowerCase();

        if (tipoAnimal === "hematofago") {
            console.log("\nSanguessuga");
        } else if (tipoAnimal === "onivoro") {
            console.log("\nMinhoca");
        }
    }
}