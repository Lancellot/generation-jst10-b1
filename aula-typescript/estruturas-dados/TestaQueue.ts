import { Queue } from "./Queue.ts";

const fila = new Queue<number>();

for ( let i = 0; i <= 10; i++){
    fila.enqueue(i);
}

console.log(`\nExibir todos os elementos da:`);
fila.printQueue();

console.log(`\nRemover elemento: ${fila.dequeue()}`);

fila.printQueue();

fila.enqueue(11);

console.log(`\nPrimeiro elemento ${fila.peek()}`);

console.log(`\nTamanho da fila: ${fila.count()}`);

console.log(`\n o elemento 4 existe na  fila? ${fila.contains(4)}`);

console.log(`\nLimpar a fila ${fila.clear()}`);

console.log(`\nA fila esta limpa ${fila.isEmpty()}`);