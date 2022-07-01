//Sistema de codificação de peças.

let pesoPecaGramas = 0;
let nomePeca = "";
let qtdPecasnaCaixa = 0;

pesoPecaGramas = prompt("Insira o peso da peça ?");

if (pesoPecaGramas > 100) {
    console.log("Avançe");
} else {
    console.log("A peça não possui o peso minímo permitido");
}

nomePeca = prompt("Informe o Nome da Peça");

if (nomePeca.length >= 3) {
    console.log("Avançe");
} else {
    console.log("Nome da Peça é muito pequeno.")
}

qtdPecasnaCaixa = prompt("Informe a quantidade de peças na caixa ?");

if (qtdPecasnaCaixa >= 10) {
    console.log("A caixa já está cheia.")
} else {
    console.log("Processo concluído com sucesso.")
}
