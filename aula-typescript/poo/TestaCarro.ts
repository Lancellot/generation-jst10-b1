import { Carro } from "./Carro.ts";

const carro = new Carro('Toyota', 'Corolla', 'Prata', 'Flex', 95000, 0);

// carro.fabricante = 'Toyota';
// carro.modelo = 'Corolla';
// carro.cor = 'Prata';
// carro.tipoDeCombustivel = 'Flex';
// carro.valorDeMercado = 95000;

console.log(`Fabricante: ${carro.fabricante}`);
console.log(`Modelo: ${carro.modelo}`);
console.log(`Cor: ${carro.cor}`);
console.log(`Tipo de Combustível: ${carro.tipoDeCombustivel}`);
console.log(`Valor de Mercado: R$ ${carro.valorDeMercado}`);

carro.ligar();
carro.acelerar(40);
carro.frear();
carro.acelerar(80);
let preco = carro.abastecer(30, 6.50);
console.log(`Abastecido, valor total R$ ${preco.toFixed(2)}`);
console.log(`Litros abastecidos: ${carro.litrosAbastecidos}L`);