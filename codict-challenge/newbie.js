/*
    01 - sum
    @function sum(n1, n2)
    a função receberá dois numero positivos como parametro @n1 e @n2 e retornar
    a soma dos numeros

    test 1 - (3, 5) => 8
    test 2 - (2, 3) => 5

*/
//[RESPOSTA 01]
function somar(n1, n2){
    return console.log(n1 + n2);
};

somar(3, 5);
somar(2, 3);



/*
    02 - somar positivos de array
    @function somaPositivosArray(array)
    criar uma função que pegue os valores de uma array numerico, filtrando valores positivos
    e depois somando-os

    test 1 - ([5, -4, 10, -2, -5]) => 15
    test 2 - ([2, 2, 2, -2, -1]) => 6
*/
//[RESPOSTA 02]
function SomaPositivosArray(arry){
    let newarray = arry.filter((number) => {
        return number >= 0;
    });

    console.log("exercicio 1 " + newarray);

    let total = newarray.reduce((total, valor) => total + valor);
    console.log("exercicio 1 " + total);
};

SomaPositivosArray([5 ,-4 ,10, -2, -5]);




/*
    03 - par oun impar
    @function ParOuImpar(n)
    a função receberá um numero como parametro @n e deverá retornar
    se o numero é par ou impar

    test - 1 (8) => par
    test - 2 (3) => impar

*/
//[RESPOSTA 03]
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




/*
    04 - triangle area
    @function triangleArea(b, h)
    a função receberá dois parâmetros base @b e altura @h, e com base
    nesse valores calcular a area de um triângulo.

    test - 1 (10, 5) => 25
    test - 2 (5, 5) => 12,5

*/
//[RESPOSTA 04]
function TrinagleArea(b, h){
    let area = (b*h)/2;
    return area;

};



/*
    05 - sinal oposto
    @function returnnegative(num)
    a função receberá um valor numerico como parâmetro @num
    e deverá retornar o valor com o sinal oposto

    test - 1 (8) => -8
    test - 2 (-8) => 8

*/
//[RESPOSTA 05]
function ReturnNegative(num){

    return console.log(-num);
 
 };
 
 ReturnNegative(50);


 
/*
    06 - anos para dias
    @function ageToDays(age) 
    a função recebrá um valor positivo como parâmetro @age e deverá converter
    esse valor de anos para dias.

    test - 1 (4) => 1460
    test - 2 (1) => 365

*/
//[RESPOSTA 06]
function ageToDays(age){
    let days = (age * 365);

    return console.log(days);
};

ageToDays(4);



// 07 -  função que retorna qualquer valor com sinal negativo
/*
    07n - tone tudo negativo
    @function TurnToNegative(num)
    a função receberá um valor positivo ou negativo como parâmetro @num
    e deverá returnar negativo

    test - 1 (10) => -10
    test - 2 (-6) => -6


*/
//[RESPOSTA 07]
function TurnToNegative(num){

    if(num < 0){
        return num;
    } else {
        return -num;
    };
    
};


// 08 - função que pegue uma string e remova todos os espaços em branco
/*
    08 - remova os espaços
    @function spaceRemove(strg)
    a função recebe uma string como parâmetro @strg e deverá retornar a mesma string 
    porém removido todos os espaços em branco

    test -1 ("  testando se funciona") => "testandosefunciona"
    test -2 ("teste dois") => "testedois"

*/
//[RESPOSTA 08]
function spaceRemove(strg){
    //  regEx /\s+/ serve para selecionar os espaços
    let response = strg.split(/\s+/).join('');  // utiliza expressões regulares
    // let response = strg.replace(/\s+/g, '');
    return console.log(response)
};

spaceRemove("   testendo se funciona");



/*
    09 - encontre john
    @function findJohn(arry)
    a função recebe um array com nomes de pessoas como parâmetro @arry
    e deverá um boolean para caso o nome "john" esteja no array ou não

    test -1 (["maria", "clara", "bruno", "john"]) => true
    test -2 (["maria", "clara", "bruno"]) => false

*/
//[RESPOSTA 09]
let array = ["maria", "clara", "bruno", "john"];
let array2 = ["maria", "clara", "bruno"];

function FindJohn(arry){

    let response = arry.includes("john");
    console.log(response);
};

FindJohn(array2);
FindJohn(array);



/*
    010 - placar do jogo
    @function SumPoints(w, d, l)
    a função recebe três variaveis como parâmetro @w, @d e @l, respectivamente os valores
    de vitorias, empates e derrotas. então retorne a somatoria dos pontos
        // win = 3 pontos
        // draw = 1 ponto
        // loss = 0 pontos

*/

function SumPoints(w, d, l){
    let win = w * 3;
    let draw = d * 1;
    let loss = l * 0;

    let response = win + draw + loss;
    return response;
};

SumPoints(3, 2, 1);