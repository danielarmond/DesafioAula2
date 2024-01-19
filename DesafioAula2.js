    let nome = prompt("Qual o seu nome?");
    let sobrenome = prompt("Qual o seu sobrenome?");
    let idadeAnoAtual = prompt("Quantos anos você completa em 2024?");

    let anoValorNumerico = parseInt(idadeAnoAtual);
    let nomeCompleto = nome+" "+ sobrenome;
    let anoNascimento = 2024 - anoValorNumerico;

    let apresentacao = "Prazer em conhecê-lo(a) "+nomeCompleto+"! Você nasceu em "+(anoNascimento)+", certo? Foi um Ótimo ano, mas 2024 será ainda melhor!";

    alert(apresentacao);