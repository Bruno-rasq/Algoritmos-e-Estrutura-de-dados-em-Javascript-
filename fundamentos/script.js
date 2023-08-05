console.log("Hello World");

// console
console.log("Console.log");
console.error("console.error");
console.warn("console.warn");


function firstChar(list){
    let resp = list.map((word) => {
        return word.slice(0,1);
    });

    return console.log(resp)
};

firstChar(["eye", "mouse", "key"]);