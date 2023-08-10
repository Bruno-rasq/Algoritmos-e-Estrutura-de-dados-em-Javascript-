/*
    01 - pegue as iniciais
    @function GetInitials(name)
    a função recebe uma string com o nome de uma pessoa @name
    e devolve as iniciais do nome

    test -1 ("john doe") => "J.D"
    test -2 ("bruno rasq") => "B.R"

*/

function GetInitials(name){

    let split = name.split(' ');

    let slice = split.map((name) => {
        return name.slice(0, 1);
    });

    let response = slice.join('.').toUpperCase();
    return console.log(response);

};

GetInitials("bruno dias");



/*
    02 - encontre o menor valor 
    @function findTheSmallest(arr)
    encontre o menor valor de uma array

    test - 1 ([2, 4, 3, 5, 22, 10]) => 2
    test - 2 ([2, 4, 3, 77, 5, 1]) => 1

*/

function FindTheSmallest(arr){
    let min = Math.min(...arr);
    return min;
};

FindTheSmallest([2, 6, 4, 8, 3, 21, 14]);



/*
    03 - remova as iniciais e finais 
    @function removeChar(str)
    a função recebe uma string como parametro @str e remove o caracter iniciale final

    test - 1 ("javascript") => "avascrip"
    test - 2 ("turtles") => "urtle"

*/

function RemoveChars(str){

    //recortando o primeiro e ultimo caracter
    let response = str.slice(1, str.length - 1);
    return console.log(response);
};

RemoveChars("javascript");
RemoveChars("turtles");



/*
    04 - inverta as palavras
    @function reveseAllWords(strg)
    a função recebe uma strings @strg e então inverte a ordem das palavras
    sem deformar as mesmas

    test - 1 ("bom dia") => "dia bom" 
    test - 2 ("dream big and dare to fail") => "fail to dare and big dream" 

*/

function reverseAllWord(strg){

    let split_words = strg.split(' ');
    let reverse = split_words.reverse();

    return console.log(reverse.join(" "));
};

reverseAllWord("dream big and dare to fail");



/*
    05 - DNA para RNA
    @function translateDNA(dna)
    a funçaõ deverá transcrever DNA para RNA
    // nota:na estrutura rna a terminação quimica (t) é substituida por (U);

    test - 1 ("CGATAT") => "CGAUAU" 
    test - 2 ("GCAT") => "CGAU" 

*/

function translateDNA(dna){
    let arr = dna.split('');
    let response = arr.map((caracter) => {
        return caracter.replace("T", "U");
    });

    return console.log(response.join(""));
};

translateDNA("CGATAT");
translateDNA("GCAT");


/*
    06 - conte a quantidade de vogais
    @function countVowels(str)
    a função recebe uma string e retorna a quantidade de vogais presnetes na mesma

    test - 1 (" frase teste") => 4 
    test - 2 ("aeiou") => 5

*/

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



/*
    07 - calcule a média 
    @function getAverage(arr)
    a função recebe um array numerico e retorna a média dos valores

    test - 1 ([1,2,3,4,5]) => 3
    test - 2 ([2,2,2,2]) => 2

*/

function getAverage(arr){
    let response = 0;

    for (n of arr) {
        response += n;
    };

    let length = arr.length;

    return console.log(response/length);
};

getAverage([1, 2, 3, 4, 5]);



/*
    08 - o tamanho da menor palavra
    @function shortestWord(str)
    a função receberá uma string e deverá retornar o tamanho da menor palavra que a string
    conter

    test - 1 ("string teste para verificar o tamanho das palavras em umm array") => 1
    test - 2 (" alguma coisa") => 5

*/

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



/*
    09 - pegue o maior e menor
    @function returnTwo(arr)
    a função recebe uma lista de valores e retorna uma nova lista com o menor e maior valor da
    lista anterior

    test - 1 ([2,4,6,20]) => [2,20]
    test - 2 ([3,5,1,88,33]) => [3,88]

*/

function returnTwo(arr){

    // pegando o menor e maior valor do array
    let smallest = Math.min(...arr);
    let biggest = Math.max(...arr);

    //gerando um novo array apenas com o menor e maior valor
    let response = [smallest, biggest];
    return console.log(response);
};

returnTwo([10, 45, -42]);



/*
    010 - lingua do "P"
    @function PLanguage()
    função que recebe uma string e transcreve para a lingua do "p"
    nota: a lingua do "P" consiste em adicionar um "P" no inicio de cada palavra

    test - 1 ("simples é difirente de fácil") => "psimples pé pdifirente pde pfácil"
    test - 2 () => 

*/

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