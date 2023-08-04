console.log("Hello World");

// console
console.log("Console.log");
console.error("console.error");
console.warn("console.warn");

const fruits = ["banana", "pera", "uva"];

const bananaa = fruits[0];
console.log(bananaa);

const [ banana, pera ] = fruits;
console.log(banana, pera);

const [ b, p ] = fruits;
console.log(b, p);

const [ , b2, p2 ] = fruits;
console.log(b2, p2);

const [bana, ...rest] = fruits;
console.log(rest);