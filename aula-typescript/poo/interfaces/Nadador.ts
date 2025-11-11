import type { Atleta } from "./Atleta.ts";

export interface Nadador extends Atleta {
    nadar(): void;
}