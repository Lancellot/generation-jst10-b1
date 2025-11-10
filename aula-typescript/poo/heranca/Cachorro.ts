import type { VoidExpression } from "typescript";
import { Animal } from "./Animal.ts";

export class Cachorro extends Animal {

    constructor(nome: string, idade: number) {
        super(nome, idade);
    }

    //
    public emitirSom(): void {
        console.log(`${this.nome} esta latidno: Au au au!`);
    }

    public correr(): void {
        console.log(`${this.nome} está correndo!`);
    }
}