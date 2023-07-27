// ========================== funções ==========================

function minhaFuncao(){
    console.log("minha função");
};

minhaFuncao();
minhaFuncao();
minhaFuncao();
minhaFuncao();

//argumentos/ parametro de funções
function nomeCompleto(nome, sobrenome){
    // console.log(`nome completo: ${nome} ${sobrenome}`);
    return `nome completo: ${nome} ${sobrenome}`;
};

// nomeCompleto("bruno", "dias");
// nomeCompleto("heleno", "pires");
console.log(nomeCompleto("bruno", "dias"));
console.log(nomeCompleto("heleno", "pires"));

// const meuNome = nomeCompleto("super", "burro");
// console.log(meuNome);
const primeiroNome = "super";
const segundoNome = "burro";
const meuNome = nomeCompleto(primeiroNome, segundoNome);
console.log(meuNome);


//arrow function
const myArrowfunction = (a, b) => {
    return a + b;
};

console.log(myArrowfunction(2, 7));

const SimpleArrowFunction = (a, b) => a + b;
console.log(SimpleArrowFunction(6, 7));



// ============ CALLBACK FUNCTIONS ============

// permite executar uma função depois de uma ação
// sendo um conceito fundamental para entender a programação assincrona

function exibir(num){
    console.log("resultado da operação: " + num);
}

function soma(a, b, callback){
    var op = a + b;
    callback(op);
};

function multiplicacao(a, b, cb){
    var op = a * b;
    cb(op);
};

soma(2, 2, exibir);
multiplicacao(5, 2, exibir);


// ============== SETIMEOUT E SETINTERVAL ============

//podemos com estas funçãoes cirar ações no software que executam depois de um tempo ou de tempos em tempos.
//um dos argumentos destas funções são as callback functions

// [setimeout]
// executa uma função depois de determinado tempo.

console.log("antes do setimeou");

setTimeout(function(){
    //funções que são passadas de alrgumento para outras
    //são sonsideradas callback
    console.log("testando o setimeout");

}, 6000); // esse valor indica o tempo 1ms = 1000ms = 1s

console.log("depois do setimeou");


// [setInterval]
// executa uma função de tempos em tempos infinitamente

setInterval(function(){
    
    console.log("testando o setInterval");

}, 6000);

// ====================CLEARTIMEOUT E CLEARINTERVAL ================

//podemos por um fim em seTimeOut e setInterval por meio destes dois métodos.
// então quando determinada condição for correspondida os timers não serão mais executados.

//[clearTimeOut]

let x = 0;

let mytimer = setTimeout(function(){
    console.log("o valor de x é 0");
}, 1000);

x = 5;

if(x > 0){
    clearTimeout(mytimer);
    console.log("parou a excução")
};


//[ClearInterval]

var myInterval = setInterval(() => {

    console.log("meu Intervalo");

}, 500);

setTimeout(() => {

    console.log("parando o intervalo");
    clearInterval(myInterval);

}, 1500);