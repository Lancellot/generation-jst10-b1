import { Animal } from "./Animal.ts";

export class Cavalo extends Animal {

    constructor(nome: string, idade: number) {
        super(nome, idade);
    }

    public emitirSom(): void {
        console.log(`${this.nome} relinchado" Iiiiirrinh!`);
    }

    public correr(): void {
        console.log(`${this.nome} está correndo!`);
    }
}

