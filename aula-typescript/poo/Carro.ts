export class Carro {
    //atributos / características
    private _fabricante: string;  //agora os atributos são privados
    private _modelo: string;    
    private _cor: string;        
    private _tipoDeCombustivel: string;
    private _valorDeMercado: number;
    litrosAbastecidos: number;
////////////////////////////////////////////////////////////////////////////////
    constructor(fabricante: string, modelo: string, cor: string,
     tipoDeCombustivel: string, valorDeMercado: number, litrosAbastecidos: number) {
        this._fabricante = fabricante;
        this._modelo = modelo;
        this._cor = cor;
        this._tipoDeCombustivel = tipoDeCombustivel;
        this._valorDeMercado = valorDeMercado;
        this.litrosAbastecidos = litrosAbastecidos;
    }
////////////////////////////////////////////////////////////////////////////////
    public get fabricante(): string {
        return this._fabricante;
    }
   
    public get modelo(): string {
        return this._modelo;
    }
 
    public get cor(): string {
        return this._cor;
    }
 
    public get tipoDeCombustivel(): string {
        return this._tipoDeCombustivel;
    }
 
    public get valorDeMercado(): number {
        return this._valorDeMercado;
    }
////////////////////////////////////////////////////////////////////////////////
    public set fabricante (fabricante: string) {
        this._fabricante = fabricante;
    }
    public set modelo (modelo: string) {
        this._modelo = modelo;
    }
    public set cor (cor: string) {
        this._cor = cor;
    }
    public set tipoDeCombustivel (tipoDeCombustivel: string) {
        this._tipoDeCombustivel = tipoDeCombustivel;
    }
 
    public set valorDeMercado (valorDeMercado: number) {
        this._valorDeMercado = valorDeMercado;
    }
 ////////////////////////////////////////////////////////////////////////////////  
    public ligar(): void {
        console.log(`${this._modelo} está ligado.`);
    }
    public acelerar(velocidade: number): void {
        console.log(`${this._modelo} está acelerando para ${velocidade} km/h.`);
    }
    public frear(): void {
        console.log(`${this._modelo} está freando.`);
    }
    public abastecer(litros: number, precoPorLitro: number): number {
        this.litrosAbastecidos += litros; // Acumula os litros abastecidos
        return litros * precoPorLitro;
    }
    public exibirDetalhes(): void {
        console.log(`Detalhes do Carro:
        Fabricante: ${this._fabricante}
        Modelo: ${this._modelo}
        Cor: ${this._cor}
        Tipo de Combustível: ${this._tipoDeCombustivel}
        Valor de Mercado: R$ ${this._valorDeMercado}`);
        //aqui usei apenas 1 console.log para exibir
        // todos os detalhes do carro, dessa forma fica mais organizado.
    }
}