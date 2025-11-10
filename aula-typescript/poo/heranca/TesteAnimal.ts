import type { Animal } from "./Animal.ts";
import { Cachorro } from "./Cachorro.ts";
import { Cavalo } from "./Cavalo.ts";
import { Preguica } from "./Preguica.ts";

const cachorro: Cachorro = new Cachorro('rex', 5);
const cavalo: Cavalo = new Cavalo('Pé de pano', 8);
const preguica: Preguica = new Preguica('Soneca', 3);

cachorro.emitirSom();
cachorro.correr();

preguica.nome = 'Sonequinha';
preguica.idade = 10;
console.log(`novo nome da Preguiça: ${preguica.nome} e idade: ${preguica.idade}`);

preguica.emitirSom();
preguica.escalarArvore();

const animal: Animal = new Cavalo('Pagaré', 10);
animal.emitirSom();