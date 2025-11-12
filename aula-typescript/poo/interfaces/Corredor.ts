import type { Atleta } from "./Atleta.ts";

export interface Corredor extends Atleta {

    correr(): void;
}