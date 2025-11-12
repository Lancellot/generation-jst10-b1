import type { Atleta } from "./Atleta.ts";

export interface Ciclista extends Atleta {

    pedalar(): void;
}