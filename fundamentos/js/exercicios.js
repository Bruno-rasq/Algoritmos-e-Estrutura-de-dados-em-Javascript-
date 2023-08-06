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


// 07 - função que receba uma string e retorne a string sem o caracter inicial e final

function RemoveChars(str){

    //recortando o primeiro e ultimo caracter
    let response = str.slice(1, str.length - 1);
    return console.log(response);
};

RemoveChars("javascript");
RemoveChars("turtles");


// 08 - função que recebe uma string, e retorna a quantidade de vogais presentes

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


// 010 - função que recebe uma string e devolva o tamanho da menor palavra da string

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



// ===================================================================================


// - [NIVEL STARTER]

// 01 - função que recebe um email como parametro e devolve uma mascara do email
// exm : johndoe@gmail.com ---> J******@********m

function HideEmail(email){

    let ahoba = email.indexOf("@");
    let partOne = email.slice(0, ahoba);
    let partTwo = email.slice(ahoba + 1, email.length);

    let Part_one_split = partOne.split('');
    let inicial = Part_one_split[0];
    Part_one_split.shift();
    let req_one = Part_one_split.map((char) => {
        return char = "*"
    }).join('');

    let resp_one = inicial + req_one;

    let Part_Two_split = partTwo.split('');
    let last = Part_Two_split[Part_Two_split.length -1];
    Part_Two_split.pop();
    let req_two = Part_Two_split.map((char) => {
        return char = "*"
    }).join('');

    let resp_two = req_two + last;

    let response = resp_one + "@" + resp_two;

    return console.log(response);
};

HideEmail("johndoe@gmail.com");
HideEmail("bruno@gmail.com");
HideEmail("meumanoheleno@gmail.com.br");

//.pop() remove ultimo elemento do array
//.push() adiciona um elemento no final do array

//.shift() remove o primeiro elemento do array
//.unshift() adiciona um elemento no inicio do array;

//.splice() remove, adiciona ou substitui elemento em posição especifica de array


// 02 - função que troque as vogais por numeros de 1 a 5
// a=1, e=2, i=3, o=4, u=5

function swapVowels(word){
    
    let lower = word.toLowerCase();
    let arr = lower.split('');

    let response = arr.map((char) => {
        switch (char){
            case 'a':
                char = 1;
                break;
            
            case 'e':
                char = 2;
                break;

            case 'i':
                char = 3;
                break;

            case 'o':
                char = 4;
                break;
                
            case 'u':
                char = 5;
                break;

            default:
        };

        return char;
    });

    return console.log(response.join(''));
}

swapVowels("hello world!");

// 03 - função que organiza strings de um array por ordem de tamanho das palavras

function SortList(list){
    let response = list.sort((a,b) => {
        if(a.length > b.length) return 1;
        if(a.length < b.length) return -1;

        return 0;
    });

    return console.log(response);
}

SortList(["eye", "mouse", "a"]);

// 04 - função que recebe um numero e devolve uma string formada pelo quadrado de cada digito

function squareItAll(n){
    let split = (''+n).split('');
    let response = split.map((n) => {
        return n ** 2;
    });

    return console.log(response.join(''));
}

squareItAll(67);
squareItAll(123);

// 05 - função que remova todas as vogais de ums string

function removeVowels(str){
    let lower = str.toLowerCase();
    let resp = lower.replace(/(a|e|i|o|u)/gi, '');

    return console.log(resp);
}

removeVowels("vowels");
removeVowels("development");

// 06 - função que recebe um array e remove todos os valores duplicados

function removedups(list){
    let resp = list.filter((valor, indice, self) => {
        return self.indexOf(valor) === indice;
    });

    return console.log(resp);
}

removedups([11, 23, 4, 4, 3, 3, 5]);
removedups([23, 23, 4, 4, 5]);

// 07 - função que recebe um array de strings e retorna um ovo array apenas com o primieor
//caracter de cada string

function firstChar(list){
    let resp = list.map((word) => {
        return word.slice(0,1);
    });

    return console.log(resp)
};

firstChar(["eye", "mouse", "key"]);

// 08 - função que recebe um valor numerico e retorna um array com os divisores 

function divisors(n){

    let cont = n;
    let resp = [];

    for(let i =0; i <= cont; i++){
        if(cont%i == 0){
            resp.push(i);
        }
    };

    return console.log(resp)
}

divisors(8);
divisors(10);


// 09 - função que verifica se todos os valores de um array são iguais [NÃO PASSOU AINDA]

function allEquals(list){
    return response = list.every((n) => n == n ? true : false);
}



// 010 -função que recebe dois parametros, uma lista de numeros e um numero
//e devreá retornar a soma dos itens da list de acordo com o numero
// exm: ([1,2,3] 2) --> 3
// exm: ([2,2,2] 3) --> 6

function SumRange(list, n){
    let response = 0;
    for(let i = 0; i < n; i++){
        response += list[i]
    };

    return console.log(response);
};

SumRange([3,10,5], 3);
SumRange([14,2, 2,5], 2);


// ===================================================================================


// - [NIVEL CODER]


// 01 - função que receba um numero e retorne sua transcrição em binário

function translateBinary(n){

    let resp = n.toString(2);
    return console.log(resp);
};

translateBinary(42);
translateBinary(2);
translateBinary(23);

// 02 - função que verifica se um numero é primo ou não

function isprime(n){

    // um array que recebe os valores em que o resto da divisão por n dá igual a 0
    let arr = [];

    for ( let i=0; i <= n; i++){
        if(n%i == 0){
            arr.push(i);
        }
    };

    // se houver mais de 2 divisores com resto inteiro, então não é primo
    let resp = arr.length > 2 ? false : true;
    return console.log(resp);
};

isprime(10);
isprime(8);
isprime(27);

// 03 - transcreva snakeCase para pascal
// snakecase => "hello_world"
// pascal => "HelloWorld";

function snakeToPascal(word){

    //subistituir todos os underline por espaço vazio
    let arr = word.replaceAll("_", " ");

    // repartir a string em array de strings
    let split = arr.split(' ');

    let resp = split.map((word) => {
        return word.substring(0,1).toUpperCase().concat(word, substring(1));
    });

    return console.log(resp.join(''));
};

snakeToPascal("hello_world");


// 04 - funcao que recebe um numero e retorne a quantidade de caracteres 0-9 

function countDigits(n){

    let arr = [];
    arr.push(n);

    let req = arr.toString().split('');
    let resp = req.length;

    return console.log(resp)
};

countDigits(932121);
countDigits(93);


// 05 - função que recebe um array e verifica se pelo menos um dos itens é diferente, entao retorna-o
// exm: ([2, 2, 2, 2, 2, 4, 2]) ---> 4

// 06 - funçaõ que recebe um array de numeros e retorna o segundo maior valor que aparecer no array
// exm: ([2, 45, 2, 3, 12, 33]) --> 33

// 07 - fução que verifica se uma palavra é palindrono ou não, retornando true ou false
// exm: "eye" --> true
// exm : "codict" --> false

// 08 - função que recebe um numero e formata-o para numero de telefone
// exm: ("0987654321") --> (098) 765 4321

// 09 - função que retorna um array espelhado
// exm: ([1,2]) --> [1,2,2,1]

function reflection(arr){
    let array = arr;
    let reverse = arr.map((item, indice, array) => {
        return array[array.length - indice - 1];
    });

    let response = array.concat(reverse);
    return console.log(response);
}

reflection([1,2,3]);
reflection([32, 3, 4]);

// 010 - função que converte celsius para fahrenheit

function CelsiusToFahrenheit(c){
    let response = ( c * (9/5)) + 32;
    return console.log(response)
}

CelsiusToFahrenheit(10);
CelsiusToFahrenheit(45);
