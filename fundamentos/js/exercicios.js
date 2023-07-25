// ================= EXERCICIOS JAVACSRIPT ==============

// [nivel iniciante]

// 01 - criar uma função que pegue os valores de uma array numerico, filtrando valores positivos
// e depois somando-os

function SomaPositivosArray(arry){
    let newarray = arry.filter((number) => {
        return number >= 0;
    });

    console.log("exercicio 1 " + newarray);

    let total = newarray.reduce((total, valor) => total + valor);
    console.log("exercicio 1 " +total);
};

SomaPositivosArray([,5 ,-4 ,10, -2, -5]);


// 02 - criar uma função que verifica se um valor é par ou impar

function ParOuImpar(num){
    if(num % 2 == 0){
        console.log("exercicio 2: o numero " + num + " é PAR ");
    } else {
        console.log("exercicio 2: o numero " + num + " é IMPAR ");
    };
};

ParOuImpar(8);


// 03 - função para somar dois valores 

function somar(n1, n2){
    return console.log("exercicio 3. resultado da soma: " + (n1 + n2));
};

somar(3, 5);