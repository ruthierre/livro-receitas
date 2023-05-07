let nome : string;
let sobrenome: string;
let nomeCompleto: string;
let idade: number;
let brasileiro: boolean;
let enderecos : string[];

nome = 'walber';
sobrenome = 'Ruthierre';
nomeCompleto = nome + " " + sobrenome;
idade = 29;
brasileiro = true;
enderecos = ['Rua Z, numero 15', 'rua A, numero 30'];

let exibirNomeCompleto = function(): string {
    return (`Nome completo é : ${nomeCompleto}`);
}

let recuperarEndereco = function(posicao: number): string {
    return (enderecos[posicao]);
}

console.log(exibirNomeCompleto());
console.log(recuperarEndereco(1));