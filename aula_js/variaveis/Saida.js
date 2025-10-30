let valor = 25.1004;
let quantidade = 10000.4522;
let resposta = true;
let palavra = "Generation";

console.log(`\nvalor:\t${new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
}).format(valor)}
quantidade:\t${quantidade.toFixed(2)}
resposta:\t${resposta}
palavra:\t${palavra}\n`);