// 01 - função que recebe duas strings e verifica se uma é anagrama de outra

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

function removeDups(str){
    let response = str.replace(/(.)(?=.*\1)/g, "")
    return console.log(response);
}

removeDups("abcdef");
removeDups("abccdeefkkk");
