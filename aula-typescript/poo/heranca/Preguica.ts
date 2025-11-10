import { Animal } from "./Animal.ts";

export class Preguica extends Animal {

    constructor(nome: string, idade: number) {
        super(nome, idade);
    }

    public emitirSom(): void {
        console.log(`${this.nome} emetindo um som sonolento : Ahhhh`);
    }

    public escalarArvore(): void {
        console.log(`${this.nome} está escalando.`);
    }
}