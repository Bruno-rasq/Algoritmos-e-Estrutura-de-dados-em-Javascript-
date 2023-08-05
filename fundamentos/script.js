console.log("Hello World");

// console
console.log("Console.log");
console.error("console.error");
console.warn("console.warn");


function removeVowels(str){
    let lower = str.toLowerCase();
    let resp = lower.replace(/(a|e|i|o|u)/gi, '');

    return console.log(resp);
}

removeVowels("vowels");
removeVowels("development");