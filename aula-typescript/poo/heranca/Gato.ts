import { Animal } from './Animal.ts';

export class Gato extends Animal {

    constructor(nome: string, idade: number) {
        super(nome, idade);
    }

    public emitirSom(): void {
        console.log(`${this.nome} está miando! Miau miau! `)
    }
}