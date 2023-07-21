console.log("Hello World");

// console

console.log("Console.log");
console.error("console.error");
console.warn("console.warn");


// variaveris 

var A = 10;
var A = 20;

let B = "Bruno"; // variavel, valor que pode mudar
// let B = "aaaaa";
B = "teste"; // reatribuição de valor

const C = "constante"; //constante, não muda
// const C = 22;
// C = 30;

if(true){
    var A = 5;
}

console.log(A); // o var foi reescrito mesmo estando em escopos dierentes

if(true){
    let B = 10;
    console.log(B); // esse let está em um escopo diferente
}

console.log(B); // vai imprimir o valor da variavel do escopo global