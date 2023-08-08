
// 01 - crie uma função que receba uma string como o nome de uma pessoa e devolva as iniciais
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


// 02 - encontre o menor valor de uma array

function FindTheSmallest(arr){
    let min = Math.min(...arr);
    return min;
};

FindTheSmallest([2, 6, 4, 8, 3, 21, 14]);


// 03 - função que receba uma string e retorne a string sem o caracter inicial e final

function RemoveChars(str){

    //recortando o primeiro e ultimo caracter
    let response = str.slice(1, str.length - 1);
    return console.log(response);
};

RemoveChars("javascript");
RemoveChars("turtles");


// 04 - função que receba uma string e devolva a memsa string inversa
//porem somente a ordem das palavras tem que ser inversa, as palavras ainda devem ser legiveis

function reverseAllWord(strg){

    let split_words = strg.split(' ');
    let reverse = split_words.reverse();

    return console.log(reverse.join(" "));
};

reverseAllWord("dream big and dare to fail");


// 05 - função que transcreva DNA para RNa
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


// 06 - função que recebe uma string, e retorna a quantidade de vogais presentes

function CountVogal(str){

    // passando todas as letras para minusculo por precausão
    let strg = str.toLowerCase();
    //fatiando a string e transformando-a em array
    let arr = strg.split('');

    //filtrando todas as vogais
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


// 07 - função que receba um array com valores e retorne a media do array

function getAverage(arr){
    let response = 0;

    for (n of arr) {
        response += n;
    };

    let length = arr.length;

    return console.log(response/length);
};

getAverage([1, 2, 3, 4, 5]);


// 08 - função que recebe uma string e devolva o tamanho da menor palavra da string

function shortestWord(str){

    // fatiar a string em palavras, gerando um array
    let arr = str.split(' ');

    // usando o map para gerar um novo array com os tamanhos das palavras
    let words = arr.map((word) => {
        return word.length;
    });

    // usando uma variavel para pegar o menor tamanho do novo array
    let response = Math.min(...words);
    return console.log(response);

};

shortestWord("string teste para verificar o tamanho das palavras em umm array");


// 09 - função que receba um array e retorne um novo array com o maior e o menor valor do array anterior.

function returnTwo(arr){

    // pegando o menor e maior valor do array
    let smallest = Math.min(...arr);
    let biggest = Math.max(...arr);

    //gerando um novo array apenas com o menor e maior valor
    let response = [smallest, biggest];
    return console.log(response);
};

returnTwo([10, 45, -42]);


// 010 - função que recebe uma string e transcreve para a lingua do "P"

function PLanguage(strg){
    //fatiando a string e transformando em array
    let split = strg.split(' ');

    //gerando um novo array com a letra P no inicio de cada palavra
    let response = split.map((s) => {
        let p = "P";
        return p + s;
    });

    return console.log(response.join(" "));
};

PLanguage("Simples é diferente de fácil");