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



// variaveis =====> TIPOS
// Number, STRING, BOLLEAN, NULL, UNDEFINED, ARRAY, OBJECT

const name = "Heleno"; // string, cadeia de caracteres
console.log(name);
console.log(typeof name);

let E = 20; // number, js não possue diferenciação entre inteiro INT e flutuante FLOAT
console.log(E);
console.log(typeof E);

let Y = 12.5;
console.log(Y);
console.log(typeof Y);

let True = true; // boolean -> verdadeiro TRUE ou falso FALSE
console.log(True);
console.log(typeof True);

var nulo = null; //nulo, variaveis que iniciam sem valor. => tipo OBJect
console.log(nulo);
console.log(typeof nulo);

let age // undefined
console.log(age);
console.log(typeof age);

const array = [1, 3, 4, 5]; // array ou list, podem possuir como itens number, string, object, boolean e etc..
console.log(array);
console.log(typeof array);

const Object = {
    nome: "bruno", 
    idade: 22
}; // objeto literal
console.log(Object);
console.log(typeof Object);