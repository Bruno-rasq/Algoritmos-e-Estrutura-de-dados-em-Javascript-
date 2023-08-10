/*
    01 - anagram detector
    @function anagramDetector(str1, str2)
    a função deverá receber como parametro duas strings @str1 e @str2
    enão verificar se uma é anagrama da outra e retornar um boolean

    test 1 - ("car", "arc") => true
    test 2 - ("race", "car") => false

*/
//[RESPOSTA - 01]
function anagramDetector(str1, str2){

    let word1 = str1.split('');
    let word2 = str2.split('');

    if(word1.length == word2.length){
        const response = word1.some((el) => word2.includes(el));
        return response;
    } else {
        return false;
    }
}

anagramDetector("car", "arc");
anagramDetector("race", "car");


/*
    02 - Unique characters
    @function hasUniqueCharacter(str)
    a função deverá receber uma string e verificar se todos os caracteres são unicos
    retornando um booleano

    test 1 -> "abcdef" => true
    test 2 -> "aAbBcC" => false

*/


/*
    03 - compress string
    @function compressString(str)
    a função deverá receber uma string e se houver carcateres repetidos em sequencia
    deverá comprimi-los ao caracter e um numero que representa a quantidade de vezes que 
    se repete

    test 1 -> "aabbcc" => "a2b2c2"
    test 2 -> "aaabbbccc" => "a3b3c3"

*/

/*
    04 - two sum
    @function twoSum(nums, target)
    a função receberá dois parametros @nums que é uma lista de valores e @target que é um alvo
    então deverá verificar se em @nums possue valores menores que @target, então retornar o indice
    deles no array

    test 1 -> ([2, 4, 5], 6) => [0, 1, 2]
    test 2 -> ([3, 3], 6) => [0, 1]

*/

/*
    05 - romeve duplicates
    @function removeDups(str)
    a funçaõ receberá uma string e deverá retornar uma nova string removendo os caracteres duplicados

    test 1 -> ("abcdef") => "abcdef"
    test 2 -> ("abccdeefkkk") => "abcdefk"

*/
//[RESPOSTA - 05]
function removeDups(str){
    let response = str.replace(/(.)(?=.*\1)/g, "")
    return console.log(response);
}

removeDups("abcdef");
removeDups("abccdeefkkk");


/*
    06 - longest common subsequence
    @function logCommonSub(str1, str2)
    a função receberá duas strings e deverá retornar a maior sequencia comun entre elas.
    nesse caso a subsequencia deverá ser continua

    test 1 -> ("abcdef", "abc") => "abc"
    test 2 -> ("abcdef", "acf") =>  false?

*/


/*
    07 - valid parentheses
    @function validParentheses(str)
    a função receberá uma string contendo apenas parenteses "()", de deverá retornar um booleano
    caso os parenteses forem validos

    test 1 -> "()" => true
    test 2 -> "(()" => false

*/
//[RESPOSTA -07]
function validParentheses(str){

    let openParentheres = str.split('').filter((char) => {
        return char == "(";
    });

    let closeparentheses = str.split('').filter((char) => {
        return char == ")";
    });

    if( openParentheres.length == closeparentheses.length){
        return console.log(true);
    } else {
        return console.log(false)
    };

}

validParentheses("()()");
validParentheses("()(");

/*
    08 - next bigger number 
    @function nestBiggerNumber(n)
    a função receberá um numero positivo, e deverá retornar o proximo maior numero possivel de ser
    formado pelos mesmos caracteres, caso não seja possivel retornar um numero maior com os mesmos
    digitos retorne -1

    test 1 -> (213) => 231
    test 2 -> (999) => -1

*/
//[RESPOSTA - 08]
function nextBiggerNumber(n) {

    let number = n.toString();
    let arr = number.split('');

    let [f, ...rest] = arr;
    let req = f + rest.sort((a, b) => b - a).join("");

    if (req == n) {
        return console.log(-1)
    } else {
        return console.log(parseInt(req))
    }

}

nextBiggerNumber(213);
nextBiggerNumber(999);

/*
    09 - roman numerals
    @function romanNumerals(n)
    a função receberá um valor positivo e devereá retornar uma string com o equivalente em numerais 
    romanos

    test 1 -> (4) => "IV"
    test 2 -> (9) => "IX"

*/

/*
    010 - pig latin
    @function pigLatin(str)
    a função receberá uma string e deverá retornar a uma nova string movendo o caractere inicial para
    o final da string e adicionando "Ay" no final

    test 1 -> ("hello") => "ellohay"
    test 2 -> ("pig") => "igpay"
    test 3 -> ("latin") => "atinlay"

*/
//[RESPOSTA - 010]
function pigLatin(str){
    let word = str.split('');
    let inicial = word.splice(0,1);

    let response = word.join('') + inicial + "ay"
    return console.log(response)
}

pigLatin("pig");
pigLatin("latin");