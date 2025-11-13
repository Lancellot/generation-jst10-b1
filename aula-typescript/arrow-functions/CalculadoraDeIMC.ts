
interface Pessoa {
    nome: string;
    peso: number;
    altura: number;
}

const pessoas: Pessoa[] = [
    {
    nome: 'assis',
    peso: 85, 
    altura: 1.62 
    },
    {
    nome: 'Enrique',
    peso: 65, 
    altura: 1.72 
    },
    {
    nome: 'Ana',
    peso: 65, 
    altura: 1.62 
    },
]

const calcularIMC = (peso: number, altura: number): number => peso/ (altura* altura);

pessoas.forEach((pessoa: Pessoa) => {
    const imc = calcularIMC(pessoa.peso, pessoa.altura);

    console.log(`${pessoa.nome} - IMC: ${imc.toFixed(2)}`);
});