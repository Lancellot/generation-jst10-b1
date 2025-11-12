import  readLine  from 'readline-sync';

try {
    let idade: number = readLine.questionInt('Digite a sua idade: ');
    validarIdade(idade);
} catch (error) {
    console.error(`Error: ${error}`);
}

function validarIdade(idade: number) {
    if ( idade <  18 ) {
        throw new Error('a pessoa não pode dirigir!')
    } else { 
        console.log('A pessoa está apta a dirigir');
    }
}