// 01 - função que troque as vogais por numeros de 1 a 5
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


// 02 - função que organiza strings de um array por ordem de tamanho das palavras

function SortList(list){
    let response = list.sort((a,b) => {
        if(a.length > b.length) return 1;
        if(a.length < b.length) return -1;

        return 0;
    });

    return console.log(response);
}

SortList(["eye", "mouse", "a"]);


// 03 - função que recebe um numero e devolve uma string formada pelo quadrado de cada digito

function squareItAll(n){
    let split = (''+n).split('');
    let response = split.map((n) => {
        return n ** 2;
    });

    return console.log(response.join(''));
}

squareItAll(67);
squareItAll(123);


// 04 - função que remova todas as vogais de ums string

function removeVowels(str){
    let lower = str.toLowerCase();
    let resp = lower.replace(/(a|e|i|o|u)/gi, '');

    return console.log(resp);
}

removeVowels("vowels");
removeVowels("development");


// 05 - função que recebe um array e remove todos os valores duplicados

function removedups(list){
    let resp = list.filter((valor, indice, self) => {
        return self.indexOf(valor) === indice;
    });

    return console.log(resp);
}

removedups([11, 23, 4, 4, 3, 3, 5]);
removedups([23, 23, 4, 4, 5]);


/*
    06 - @function allEquals(list)
         deverá returnar um boolean caso todos os valores da @list
         forem iguais
*/


// 07 - função que recebe um array de strings e retorna um ovo array apenas com o primieor
//caracter de cada string

function firstChar(list){
    let resp = list.map((word) => {
        return word.slice(0,1);
    });

    return console.log(resp)
};

firstChar(["eye", "mouse", "key"]);


// 08 -função que recebe dois parametros, uma lista de numeros e um numero
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


// 09 - função que recebe um valor numerico e retorna um array com os divisores 

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


// 010 - função que recebe um email como parametro e devolve uma mascara do email
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

function HideEmail2(email){

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
