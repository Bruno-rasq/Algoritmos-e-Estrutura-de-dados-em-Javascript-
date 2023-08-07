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

//jeito errado 

//função que sma dois numeros
function SomarNumeros(a, b){
    return a + b;
};

const results = x < 0 ? 0 : x > 100 ? 100 : x;


// jeito certo 

/*
    * somar dois numero e retornar resultado
    * @param {number} a - o primeiro numero
    * @param {number} b - o segundo numero
    * @return {number} - o resultado da soma de a e b
*/
function SomarNumerosCerto(a, b){
    return a + b;
};

// garante que o x esteja entre 0 e 100
const resultsCerto = x < 0 ? 0 : x > 100 ? 100 : x;




// [ 04 - duplicação de código ] ================

// dificulta manutenção, atualização e leitura

// solução refatoração

const SPACE = " ";

function getFullName( firstName, lastName){
    let fullName = firstName + SPACE + lastName;
    return fullName;
}

function getFullName2( firstName, lastName){
    let fullName = firstName + SPACE + lastName;
    return fullName;
}



function getPrice(product){
    let price;

    if( product === "caneta"){
        price = 20;
    } else if ( product === "apagador"){
        price = 10;
    } else if ( product === "lápis"){
        price = 5;
    }

    return price;
}


const products = {
    caneta: 20,
    apagador: 10,
    lapis: 5,
}

function GetProductsPrice(product){
    return products[product];
}




// [ 05 - estruturas de controle claras ] ================

// evita: 
// * estruturas aninhadas
// * else desnecessário
// * negação dupla

// utilize:
// * operádores lógicos
// * ternário

if(!isnotValid){
    //....
}

if(isValid){
    //...
}


let message1
if(isSucess){
    message1 = "sucessor"
} else {
    message1 = "erro"
}

let message2 = isSucess ? "sucesso" : "erro";