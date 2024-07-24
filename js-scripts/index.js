// alert("Hello World!");
// console.log("Olá mundo!");
// prompt("Escreva seu nome: \n");

// var sobrenome = prompt("Entre com seu sobrenome: \n")

// var myName = "Thiago " + sobrenome
// var myAge = 25;
// var condition = true;

// var numero = 10;
// var Numero = 20;

// var if = "Não pode"

// var _variavel = 12;

// var nome completo # = "Nada disso"

// var sobrenome = prompt("Entre com seu sobrenome: \n")

// var myName = "Thiago " + sobrenome

// var myAge = 26;

// var lista = [1, 2, 3]

// var texto = "Hello World! Mais coisa";

// var nome = prompt("Nome: ");
// nome = nome.slice(0, 1).toUpperCase() + nome.slice(1, nome.length).toLowerCase();

// console.log(nome);

// function apresenta(){
//     alert("Oi, eu sou o Thiago!");
// }

// // function call

// var res = apresenta();

// function soma(){
//     var a = parseInt(prompt("A: "));
//     var b = parseInt(prompt("B: "));
//     return a + b // --> Função acaba
//     // alert("não roda")
// }

// var res = soma();


function soma(a, b){
    return a + b;
}

var res = soma(14, 90);
console.log(res);

function montaNome(nome, sobrenome){
    return nome + " " + sobrenome;
}

var myName = montaNome("Lima", "Thiago")
console.log(myName);

// .toLowerCase()
// .toUpperCase()