console.log("Hello World");

// console
console.log("Console.log");
console.error("console.error");
console.warn("console.warn");

function hasUniqueCharacter(str){

    let NoReps = str.replace(/(.)(?=.*\1)/gi, "");
    let response = str.length == NoReps.length ? true : false;

    return console.log(response);
}

hasUniqueCharacter("abcdef");
hasUniqueCharacter("aAbBcC");