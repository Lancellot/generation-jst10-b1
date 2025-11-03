import readline from 'readline-sync';

let continua;

do {

    let senha = readline.question("Digite a sua senha (mínimo 6 caracteres): ");
    let repetirSenha = readline.question("Repita a sua senha: ");
    
    if (senha === repetirSenha) {
        continua = false;
        console.log("Senha cadastrada com sucesso!");
    } else {
        console.log("As senhas não coincidem. Tente novamente.");
        continua = true;
    }

} while (continua);

