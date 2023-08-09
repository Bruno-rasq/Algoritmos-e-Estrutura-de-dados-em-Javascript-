console.log("Hello World");

// console
console.log("Console.log");
console.error("console.error");
console.warn("console.warn");

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