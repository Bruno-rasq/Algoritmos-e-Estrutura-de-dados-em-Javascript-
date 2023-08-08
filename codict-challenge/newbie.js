// [nivel iniciante - NEWBIE]

// 01 - função para somar dois valores 

function somar(n1, n2){
    return console.log(n1 + n2);
};

somar(3, 5);

// 02 - criar uma função que pegue os valores de uma array numerico, filtrando valores positivos
// e depois somando-os

function SomaPositivosArray(arry){
    let newarray = arry.filter((number) => {
        return number >= 0;
    });

    console.log("exercicio 1 " + newarray);

    let total = newarray.reduce((total, valor) => total + valor);
    console.log("exercicio 1 " + total);
};

SomaPositivosArray([,5 ,-4 ,10, -2, -5]);

// 03 - criar uma função que verifica se um valor é par ou impar

function ParOuImpar(num){
    if(num % 2 == 0){
        // console.log("exercicio 2: o numero " + num + " é PAR ");
        return "Par";
    } else {
        // console.log("exercicio 2: o numero " + num + " é IMPAR ");
        return "Impar";
    };
};

ParOuImpar(8);

// 04 - criar uma função que modifique a area de um triangulo

function TrinagleArea(b, h){
    let area = (b*h)/2;
    return area;

};

// 05 - retornar um valor com sinal oposto
// exm: 3 deverá retornar -3 // -4 deverá retornar 4

function ReturnNegative(num){

    return console.log(-num);
 
 };
 
 ReturnNegative(50);

  // 06 - função que pegue um valor em anos e retorne um valor em dias

  function ageToDays(age){
    let days = (age * 365);

    return console.log(days);
};

ageToDays(4);


// 07 -  função que retorna qualquer valor com sinal negativo

function TurnToNegative(num){

    if(num < 0){
        return num;
    } else {
        return -num;
    };
    
};


// 08 - função que pegue uma string e remova todos os espaços em branco

function spaceRemove(strg){
    //  regEx /\s+/ serve para selecionar os espaços
    let response = strg.split(/\s+/).join('');  // utiliza expressões regulares
    // let response = strg.replace(/\s+/g, '');
    return console.log(response)
};

spaceRemove("   testendo se funciona");


// 09 - função que encontre o nome "john" dentro de um array

let array = ["maria", "clara", "bruno", "john"];
let array2 = ["maria", "clara", "bruno"];

function FindJohn(arry){

    let response = arry.includes("john");
    console.log(response);
};

FindJohn(array2);


// 010 -  função que pegue os valores de vitorias, empates e derrotas  e returnasse a somatoria de pontos
// win = 3 pontos
// draw = 1 ponto
// loss = 0 pontos

function SumPoints(w, d, l){
    let win = w * 3;
    let draw = d * 1;
    let loss = l * 0;

    let response = win + draw + loss;
    return response;
};

SumPoints(3, 2, 1);