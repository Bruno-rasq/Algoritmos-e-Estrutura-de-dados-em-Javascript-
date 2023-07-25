// ============================ escopo =======================

//no javascript podemos ter varios escopos
//o global que é iniciado em toda a aplicação
//e os locais, que podem existir em varias instruções como as funções

//escopos possibilitam a existencia de duas variaveis de mesmo nome com valores distintos

let x = 10;
console.log(x + " escopo global");

function escopInterno(){
    let x = 20;
    console.log(x + " escopo interno");
};

escopInterno();


var y = 10;
console.log(y + " escopo global");

function escopInt(){
    var y = 20;
    console.log(y + " escopo interno");
};

escopInt();


function varInt(){
    let z = 0;
    console.log(z);
};

varInt();
// console.log(z); // variavel z não está no escopo global

//somente variaveis de escopo global podem entrar no escopo interno de uma função
//variaveis de escopo interno não podem sair do seu escopo
let a = 70;

function teste(number){
    console.log(number)
};

teste(a);

//estruturas como if, for, while se encaixam como escopo global
//a menos que estejam dentro do escopo de uma função