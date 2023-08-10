/*
    01 - troque as vogais por numeros
    @function swapVowels(word)
    a função receberá uma string, e deverá trocar as vogais por numeros
    a=1, e=2, i=3, o=4, u=5

    test -1 () =>
    test -2 () =>

*/

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



/*
    02 - organize string
    @function SortList(list)
    a função recebe uma lista de strings e deverá ordena-la por tamanho das palavras

    test -1 () =>
    test -2 () =>

*/

function SortList(list){
    let response = list.sort((a,b) => {
        if(a.length > b.length) return 1;
        if(a.length < b.length) return -1;

        return 0;
    });

    return console.log(response);
}

SortList(["eye", "mouse", "a"]);



/*
    03 - quadrado de todos
    @function squareItAll(n)
    função que recebe um numero e devolve uma string formada pelo quadrado de cada digito

    test -1 () =>
    test -2 () =>

*/

function squareItAll(n){
    let split = (''+n).split('');
    let response = split.map((n) => {
        return n ** 2;
    });

    return console.log(response.join(''));
}

squareItAll(67);
squareItAll(123);



/*
    04 - remova as vogais
    @function removeVowels(str)
    função que remova todas as vogais de ums string

    test -1 () =>
    test -2 () =>

*/

function removeVowels(str){
    let lower = str.toLowerCase();
    let resp = lower.replace(/(a|e|i|o|u)/gi, '');

    return console.log(resp);
}

removeVowels("vowels");
removeVowels("development");



/*
    05 - remova as duplas
    @function removedups(list)
    função que recebe um array e remove todos os valores duplicados

    test -1 () =>
    test -2 () =>

*/

function removedups(list){
    let resp = list.filter((valor, indice, self) => {
        return self.indexOf(valor) === indice;
    });

    return console.log(resp);
}

removedups([11, 23, 4, 4, 3, 3, 5]);
removedups([23, 23, 4, 4, 5]);


/*
    06 -  all equals
    @function allEquals(list)
    a funcao receberá uma lista numerica como parametro e deverá
    devolver um boolean caso todos os valores da lista forem iguais.

    test 1 - ([1,2,1,1,1,1]) => false
    test 2 - ([2,2,2]) => true
*/
//[RESPOSTA - 06]
function allEquals(list){

    let response = list.every((value) => value == list[0]);

    return console.log(response);
}

allEquals([1,2,1,1,1]);
allEquals([2,2,2]);


/*
    07 - apenas o primeiro caracter
    @function firstChar(list)
    função que recebe um array de strings e retorna um novo array apenas com o primeiro
    caracter de cada string

    test -1 () =>
    test -2 () =>

*/

function firstChar(list){
    let resp = list.map((word) => {
        return word.slice(0,1);
    });

    return console.log(resp)
};

firstChar(["eye", "mouse", "key"]);




/*
    08 - some o alcance
    @function SumRange(list, n)
    função que recebe dois parametros, uma lista de numeros e um numero
    e devreá retornar a soma dos itens da list de acordo com o numero

    test -1 ([1,2,3] 2) --> 3
    test -2 ([2,2,2] 3) --> 6

*/

function SumRange(list, n){
    let response = 0;
    for(let i = 0; i < n; i++){
        response += list[i]
    };

    return console.log(response);
};

SumRange([3,10,5], 3);
SumRange([14,2, 2,5], 2);


 
/*
    09 - todos os divisores
    @function divisors(n)
    função que recebe um valor numerico e retorna um array com os divisores 

    test -1 () =>
    test -2 () =>

*/

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



/*
    010 - mascara para email
    @function HideEmail(email)
    função que recebe um email como parametro e devolve uma mascara do email

    test -1 ("johndoe@gmail.com") => "J******@********m"
    test -2 ("maria@gmail.com.br") => "m****@***********r"

*/
function HideEmail(email){

    let arr = email.split("@");
    let part1 = arr[0].split('');
    let part2 = arr[arr.length -1].split('');

    let inicial = part1[0];
    let last = part2[part2.length -1];

    part2.pop();
    part1.shift();

    let req1 = inicial + part1.map((char) => {
        return char = "*";
    }).join('');

    let req2 = part2.map((char) => {
        return char = "*";
    }).join('') + last;

    return console.log( req1 + "@" + req2);
}

HideEmail2("marie@gmail.com");
HideEmail2("johndoe@gmail.com");
