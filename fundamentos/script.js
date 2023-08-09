console.log("Hello World");

// console
console.log("Console.log");
console.error("console.error");
console.warn("console.warn");

function anagramDetector(str1, str2){

    let word1 = str1.split('');
    let word2 = str2.split('');

    if(word1.length == word2.length){
        const response = word1.some((el) => word2.includes(el));
        return console.log(response);
    } else {
        return console.log(false);
    }
}

anagramDetector("car", "arc");
anagramDetector("race", "car");