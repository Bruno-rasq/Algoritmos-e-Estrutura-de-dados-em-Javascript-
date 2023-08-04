console.log("Hello World");

// console
console.log("Console.log");
console.error("console.error");
console.warn("console.warn");

function snakeToPascal(word){

    //subistituir todos os underline por espaço vazio
    let arr = word.replaceAll("_", " ");

    // repartir a string em array de strings
    let split = arr.split(' ');

    let resp = split.map((word) => {
        return word.substring(0,1).toUpperCase().concat(word.substring(1));
    });

    return console.log(resp.join(''));
};

snakeToPascal("hello_world");