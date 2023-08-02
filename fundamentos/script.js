console.log("Hello World");

// console
console.log("Console.log");
console.error("console.error");
console.warn("console.warn");

function test(str){

    let arr = str.split(' ');

    let words = arr.map((word) => {
        return word.length;
    });

    let response = Math.min(...words);
    return console.log(response);

};

test("string teste para verificar o tamanho das palavras em umm array");