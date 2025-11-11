//const nome_do_array: Array<T> = new Array<T>();
//const nome_do_array: Array<T> = new Array<T>(elemeento1, elemento2);

const pessoas: Array<string> = new Array<string>('enrique', 'bruno' , 'assis');

for (let pessoa of pessoas) {
    console.log(pessoa);
}

pessoas.push('Daniel');

for (let pessoa of pessoas) {
    console.log(pessoa);
}

pessoas.unshift('ass', 'varios nomes');
console.log(`\nA posição da pessoa Eduardo é: ${pessoas.indexOf('assis')}`);

pessoas[3] = 'jeferson';

console.log(`\nO tamanho do array pessoas é ${pessoas.length}`);