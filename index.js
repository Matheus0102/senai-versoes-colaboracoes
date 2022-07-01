let pesoPeca = 0;
let nomePeca = "";
let qtdPecasCaixa = 0;

pesoPeca = prompt("Informe o peso em Gramas da peça, apenas numero.");

if (pesoPeca >= 100) {
    nomePeca = prompt("Informe o nome da peça");

    if (nomePeca.length >= 3) {
        qtdPecasCaixa = prompt("Informe a quantidade de peças na caixa");

        if (qtdPecasCaixa >= 3) {
            console.log("A caixa já está cheia.");
        } else {
            console.log("Cadastro concluído com sucesso");
        }
    } else {
        console.log("O nome da peça é inferior a 3 caracteres");
    }
} else {
    console.log("A peça não possuí o pesso minímo permitido");
}