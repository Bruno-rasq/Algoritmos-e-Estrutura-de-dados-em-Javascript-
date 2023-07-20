// Alguns métodos utilizados com arrays


const data = [
    {nome: "bruno", idade: 22},
    {nome: "joao", idade: 12},
    {nome: "heleno", idade: 22222},
    {nome: "mario", idade: 60},
    {nome: "rodolfo", idade: 22},
    {nome: "bruna", idade: 19}
];

// ============= REVERSE ==============

// simplesmente inverte a ordem dos itens 

let ReverseData = data.reverse();
console.log(ReverseData); 

console.log("=======================");


// ============= FIND ================

// metodo utilizado para encontra algo em um array
// necessita de alguma lógica que auxilie na procura

const C = [2, 5, 45, 65, 3, 0, 10];

let Find = C.find((element) => element > 10);

console.log(Find); // obs: retorna o primeiro valor que satisfaz a requisição => mostra só o 45

console.log("=======================");


// ============= FINDINDEX() ou INDEXOF() =============

// se precisar encontrar o indice de um valor

const menorIdade = data.findIndex((users) => users.idade >= 25 && users.idade <= 70);
console.log(menorIdade);

data[menorIdade].nome += " que mario?"; // atribui um valor 
console.log(data[3].nome); // mostrei o nome de um elemento criminoso

console.log("=======================");


// ============== INCLUDES() ======================

// serve para encontrat um valor especifico
// se tiver retornará um valor booleano true
// se não tiver retorna false

const D = [1, 2, 4, 3, 5, 6, 43, 23, 10];

let hasFive = D.includes(5);
let hastwoHundred = D.includes(200);
console.log(hasFive);
console.log(hastwoHundred);

console.log("=======================");


// =============== MAP() =====================

data.map((users) => users.newsletter = false);
console.log(data);

console.log("=======================");


//  =============== FILTER() =====================
const F = [1, 4, -5, 6, -10, 20, -3];
console.log(F);

const menorQueZero = F.filter((element) => element >= 0 && element < 10);
console.log(menorQueZero);

