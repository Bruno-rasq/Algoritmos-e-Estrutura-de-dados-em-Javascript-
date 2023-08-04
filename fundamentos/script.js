console.log("Hello World");

// console
console.log("Console.log");
console.error("console.error");
console.warn("console.warn");

function testObject([first, ...rest]){
    console.log((rest.join('')) + first);
};

testObject("banana");