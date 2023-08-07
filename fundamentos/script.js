console.log("Hello World");

// console
console.log("Console.log");
console.error("console.error");
console.warn("console.warn");


// ========================== CLEAR CODE ===================

// [ 01 - nomeando variaveis || funções || objetos ] ================

// jeito errado
const d = new Date(); // para data
const x = 5;
const y = 10;

function format(a){}
function mp(a, b){}

const p = {
    n: "bruno",
    i: 22
}

// jeito certo
const CurrentDate = new Date(); // para data
const firstNumber = 5;
const SecondNumber = 10;

function formatPhoneNumber(phone){}
function Multiply(a, b){}

const pessoa = {
    nome: "bruno",
    idade: 22
}



// [ 02 - formatação de código ] ================

// identação || espaçamento || chaves || manter padrão


// jeito errado
function testErrado(a,b){
return a + b;
}

const nome="heleno";

if(true) console.log("AA que horror");

// jeito certo
function testCerto(a, b){
    return (a + b);
}

const nome2 = "heleno";

if(true){
    console.log("ai sim");
} else {
    console.log("bem melhor");
}



// [ 03 - comentando o código ] ================

// evitar redundancia
// evitar os desnecessário
