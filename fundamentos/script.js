console.log("Hello World");

// console
console.log("Console.log");
console.error("console.error");
console.warn("console.warn");

function countDigits(n){

    let arr = [];
    arr.push(n);

    let req = arr.toString().split('');
    let resp = req.length;

    return console.log(resp)
};

countDigits(932121);
countDigits(93);