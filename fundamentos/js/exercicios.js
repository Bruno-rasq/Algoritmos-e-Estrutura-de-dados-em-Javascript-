// ================= EXERCICIOS JAVACSRIPT ==============

// [nivel iniciante - NEWBIE]

// 01 - criar uma função que pegue os valores de uma array numerico, filtrando valores positivos
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

//outra resposta

function somaPositives(arry){
    let response = 0;

    for (n of arry) {
        if( n > 0){
            response += n
        }
    };

    return response;
};


// 02 - criar uma função que verifica se um valor é par ou impar

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


// 03 - função para somar dois valores 

function somar(n1, n2){
    return console.log("exercicio 3. resultado da soma: " + (n1 + n2));
};

somar(3, 5);


// 04 - retornar um valor com sinal oposto
// exm: 3 deverá retornar -3 // -4 deverá retornar 4

function ReturnNegative(num){

    return console.log(-num);
 
 };
 
 ReturnNegative(50);


 // 05 - função que pegue um valor em anos e retorne um valor em dias

 function ageToDays(age){
    let days = (age * 365);

    return console.log(days);
};

ageToDays(4);

// 06 - função que pegue uma string e remova todos os espaços em branco

function spaceRemove(strg){
    //  regEx /\s+/ serve para selecionar os espaços
    let response = strg.split(/\s+/).join('');  // utiliza expressões regulares
    // let response = strg.replace(/\s+/g, '');
    return console.log(response)
};

spaceRemove("   testendo se funciona");

// 07 - função que encontre o nome "john" dentro de um array

let array = ["maria", "clara", "bruno", "john"];
let array2 = ["maria", "clara", "bruno"];

function FindJohn(arry){

    let response = arry.includes("john");
    console.log(response);
};

FindJohn(array2);


// 08 -  função que pegue os valores de vitorias, empates e derrotas  e returnasse a somatoria de pontos
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


// 09 -  função que retorna qualquer valor com sinal negativo

function TurnToNegative(num){

    if(num < 0){
        return num;
    } else {
        return -num;
    };
    
};


// 010 - criar uma função que modifique a area de um triangulo

function TrinagleArea(b, h){
    let area = (b*h)/2;
    return area;

};

// =============================================================================


// [nivel ROOKIE];


// 01 - encontre o menor valor de uma array

function FindTheSmallest(arr){
    let min = Math.min(...arr);
    return min;
};

FindTheSmallest([2, 6, 4, 8, 3, 21, 14]);


// 02 - crie uma função que receba uma string como o nome de uma pessoa e devolva as iniciais
// exm: "bruno dias" ---> "B.D";

function GetInitials(name){

    let split = name.split(' ');

    let slice = split.map((name) => {
        return name.slice(0, 1);
    });

    let response = slice.join('.').toUpperCase();
    return console.log(response);

};

GetInitials("bruno dias");


// 03 - função que receba uma string e devolva a memsa string inversa
//porem somente a ordem das palavras tem que ser inversa, as palavras ainda devem ser legiveis

function reverseAllWord(strg){

    let split_words = strg.split(' ');
    let reverse = split_words.reverse();

    return console.log(reverse.join(" "));
};

reverseAllWord("dream big and dare to fail");

// 04 - função que transcreva DNA para RNa
// nota:na estrutura rna a terminação quimica (t) é substituida por (U);

function translateDNA(dna){
    let arr = dna.split('');
    let response = arr.map((caracter) => {
        return caracter.replace("T", "U");
    });

    return console.log(response.join(""));
};

translateDNA("CGATAT");
translateDNA("GCAT");


// 05 - função que receba um array com valores e retorne a media do array

function getAverage(arr){
    let response = 0;

    for (n of arr) {
        response += n;
    };

    let length = arr.length;

    return console.log(response/length);
};

getAverage([1, 2, 3, 4, 5]);


// 06 - função que recebe uma string e transcreve para a lingua do "P"

function PLanguage(strg){
    let split = strg.split(' ');

    let response = split.map((s) => {
        let p = "P";
        return p + s;
    });

    return console.log(response.join(" "));
};

PLanguage("Simples é diferente de fácil");


// 07 - função que receba uma string e retorne a string sem o caracter inicial e final

function RemoveChars(str){
    let response = str.slice(1, str.length - 1);
    return console.log(response);
};

RemoveChars("javascript");
RemoveChars("turtles");


// 08 - função que recebe uma string, e retorna a quantidade de vogais presentes

function CountVogal(str){

    let strg = str.toLowerCase();
    let arr = strg.split('');

    let response = arr.filter((char) => {
        if( char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
            return char
        };
    });

    return console.log(response.length);

};

CountVogal("string teste");
CountVogal("aeiou");
CountVogal("AEIOU");


// 09 - função que receba um array e retorne um novo array com o maior e o menor valor do array anterior.

function returnTwo(arr){

    let smallest = Math.min(...arr);
    let biggest = Math.max(...arr);

    let response = [smallest, biggest];
    return console.log(response);
};

returnTwo([10, 45, -42]);
