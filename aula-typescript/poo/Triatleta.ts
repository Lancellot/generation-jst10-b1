import type { Ciclista } from "./interfaces/Ciclista.ts";
import type { Corredor } from "./interfaces/Corredor.ts";
import type { Nadador } from "./interfaces/Nadador.ts";
import { Pessoa } from "./Pessoa.ts";

export class Triatleta extends Pessoa implements Ciclista, Corredor, Nadador{
    
    public alimentar(): void {
        console.log(`Triatleta se alimentando`);
    }

    public aquecer(): void {
        console.log(`Triatleta está aquecendo`);
    }
    
    public pedalar(): void {
        console.log(`Triatleta está pedalando`);
    }

    public correr(): void {
        console.log(`Triatleta está correndo`);
    }

    public nadar(): void {
        console.log(`Triatleta está nadando`);
    }

}