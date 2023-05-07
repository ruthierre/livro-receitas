"use strict";
let nome;
let sobrenome;
let nomeCompleto;
let idade;
let brasileiro;
let enderecos;
nome = 'walber';
sobrenome = 'Ruthierre';
nomeCompleto = nome + " " + sobrenome;
idade = 29;
brasileiro = true;
enderecos = ['Rua Z, numero 15', 'rua A, numero 30'];
let exibirNomeCompleto = function () {
    return (`Nome completo é : ${nomeCompleto}`);
};
let recuperarEndereco = function (posicao) {
    return (enderecos[posicao]);
};
console.log(exibirNomeCompleto());
console.log(recuperarEndereco(0));
