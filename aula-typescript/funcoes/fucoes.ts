
function saudar():void {
    console.log('Bom dia!');
};
saudar();

function saudar2(nome: string): void {
    console.log(`bom dia, ${nome}`);

};
saudar2('Assis');

function saudar3(nome: string = 'mundo'): void {
    console.log(`olá ${nome}`);
};
saudar3();

function somar(numero1: number, numero2: number): number {
    return numero1 + numero2;
};
console.log(`O resultado da soma é ${somar(2,4)}`);

function verifcarPar (numero: number): boolean {
    return numero % 2 === 0;
}
let resultado = verifcarPar(4);

if (resultado) {
    console.log('O numero é par');
}

function somaArray(numeros: number[]): number {
    let total = 0 ;
    for (let numero of numeros){
        total += numero;
    }
    return total;
}
console.log(`soma de array: ${somaArray ([1, 2, 3, 4, 5])}`);

function apresentar(nome?: string, idade?: number): string {
    if (nome && idade !== undefined) {
        return `Olá, meu nome é ${nome} e tenho ${idade} anos!`;
    } else if (nome) {
        return `Olá, meu nome é ${nome}`;
    } else {
        return `Olá`;
    }
}
console.log(apresentar('assis', 25));
console.log(apresentar('ana'));
console.log(apresentar());

function calcularIMC(peso: number, altura: number): string | null {
    if (peso <= 0 || altura <= 0) {
        return null;
    } 

    const imc = peso / (altura **2);
    let classificao: string;

    if (imc < 18.5) {
        classificao = 'abaixo do peso';
    } else if ( imc < 24.9) {
        classificao = 'normal';
    } else if ( imc < 29.9) {
        classificao = 'sobrepeso';
    } else {
        classificao = 'obesidade'
    }

    return classificao;
}
console.log(calcularIMC(72,1.81));