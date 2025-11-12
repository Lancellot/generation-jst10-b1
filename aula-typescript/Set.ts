//const nome_do_set: Set<T> = new Set<T>();

const setFrutas: Set<string> = new Set<string>(['Abacate', 'Banana', 'Maça']);

console.log(setFrutas);

for(let fruta of setFrutas) {
    console.log(fruta);
}

console.log(`\nExite a fruta kiwi? ${setFrutas.has('Kiwi')}`);

console.log(setFrutas.delete('Abacate'));

console.log(`\n Tamanho do set: ${setFrutas.size}`);