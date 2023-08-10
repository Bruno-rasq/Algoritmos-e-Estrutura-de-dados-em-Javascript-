
/*
    01 - transcreva para binário
    @function translateBinary(n)
    função que receba um numero e retorne sua transcrição em binário

*/

function translateBinary(n){

    let resp = n.toString(2);
    return console.log(resp);
};

translateBinary(42);
translateBinary(2);
translateBinary(23);



/*
    02 - numero primo
    @function isprime(n)
    função que verifica se um numero é primo ou não

*/

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



/*
    03 - snakecase to pascal
    @function snakeToPascal(word)
    transcreva snakeCase para pascal
    snakecase => "hello_world"
    pascal => "HelloWorld"

*/

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


/*
    04 

    @function findUnique(list)
    a função deverá receber uma lista de valores e retornar apenas o valor diferente
    se houver


*/

function FindUnique(list){

    let unique = {}

    /*
        para cada elemento é criado um index no objeto unique e incrementado
        a quantidade de vezes que o elemento aparece
    */
    list.forEach((el) => unique[el] = unique[el] ? unique[el] + 1 : 1);

    let resp = {}

    /*
        depois de pronto o objeto, basta percorrer o objeto a procura do elemento
        cujo a incrementação é igual a 1, ou seja que apareceu somente 1 vex
        e atribuir esse elemento a variavel resp
    */
    for(i in unique){
        if(unique[i] === 1){
            resp = i;
        } 
    }

    return console.log(resp)
}

FindUnique([1,1,1,1,2,1,1]);
FindUnique([3,2,2,2]);
FindUnique([2,2,4,2]);


/*
    05 - conte os digitos
    @function countDigits(n)
    funcao que recebe um numero e retorne a quantidade de caracteres 0-9

*/

function countDigits(n){

    let arr = [];
    arr.push(n);

    let req = arr.toString().split('');
    let resp = req.length;

    return console.log(resp)
};

countDigits(932121);
countDigits(93);


/*
    06 - o segundo maior valor
    @function findSecond(list)
    funçaõ que recebe um array de numeros e retorna o segundo maior valor que aparecer no array
    exm: ([2, 45, 2, 3, 12, 33]) --> 33

*/

function findSecond(list){
    list.sort((a,b) => {
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
    });

    let response = list[list.length - 2];
    return console.log(response);
}

findSecond([42, 2, 57, 1000]);
findSecond([3, 4, 67, 8, 9, 10]);



/*
    07 - palindrono
    @function Palindrono(str)
    fução que verifica se uma palavra é palindrono ou não, retornando true ou false
    exm: "eye" --> true
    exm : "codict" --> false

*/

function Palindrono(str){
    
    // retirei todos os espaços em branco
    let palindro = str.split(/\s+/).join('');

    // fatiei a string para array
    let req = palindro.split('');

    // crie uma variavel que recebe uma inversão do array
    let reverse = req.map((item, indice, array) => {
        return array[array.length - indice - 1];
    });

    //verifiquei se os dois array são iguais
    let response = JSON.stringify(req) === JSON.stringify(reverse);

    return console.log(response);
}

Palindrono("race car");
Palindrono("eye");
Palindrono("codict");



/*
    08 - formate numero de telefone
    @function PhoneNumberFormat(phone)
    função que recebe um numero e formata-o para numero de telefone
    exm: ("0987654321") --> (098) 765 4321

*/

function PhoneNumberFormat(phone){

    let phoneNumber = /(\d{3})(\d{3})(\d{4})/g;
    let formatNumber = "\($1\) $2 $3";

    let response = phone.replace(phoneNumber, formatNumber);
    return console.log(response);
}

PhoneNumberFormat("0987654321");



/*
    09 - array espelhado
    @function reflection(arr)
    função que retorna um array espelhado
    exm: ([1,2]) --> [1,2,2,1]

*/

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




/*
    010 - celcius para fahrenheit
    @function CelsiusToFahrenheit(c)
    função que converte celsius para fahrenheit

*/

function CelsiusToFahrenheit(c){
    let response = ( c * (9/5)) + 32;
    return console.log(response)
}

CelsiusToFahrenheit(10);
CelsiusToFahrenheit(45);