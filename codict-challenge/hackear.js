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

