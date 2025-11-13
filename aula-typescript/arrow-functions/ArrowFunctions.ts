

const numeros: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numeros.forEach(numero => console.log(numero) );

const funcao = (numero: number) => console.log(numero);

const somar = (n1: number,  n2: number): number => n1 + n2;

console.log(`resutaldo da soma: ${somar(5,2)}`);

//ao aplicar {} na função deve colocar o return
const somar2 = (n1: number,  n2: number) => { return n1 + n2};

console.log(`resutaldo da soma: ${somar2(5,2)}`);

numeros.forEach((numero: number) => {
    if (numero % 2 == 0)
        console.log(numero);
})

numeros.forEach(numero => {
    if (numero % 2 == 0)
        console.log(numero);
})