console.log("Hello World");

// console
console.log("Console.log");
console.error("console.error");
console.warn("console.warn");


function squareItAll(n){
    let split = (''+n).split('');
    let response = split.map((n) => {
        return n ** 2;
    });

    return console.log(response.join(''));
}

squareItAll(67);
squareItAll(123);