// ============================= destruturar ============================== 

// serve para tirar um valor primitivo ou uma estrutura de dados de dentro de outra estrutura

// [object]

let age;

const pessoa = {
    nome: "bruno",
    idade: 22
};

// uma forma de pegar o valor
const name = pessoa.nome;
console.log(name);

// forma com destructuring
const { nome } = pessoa;
console.log(nome);

//   [renomeamento de propriedades]
// const { idade: age } = pessoa;
console.log(age);

//   [colocando em variaveis existente]
({ idade: age } = pessoa);
console.log(age);


// ============================

// [array]
//   2 valore
//   desconsiderando itens 
//   ...rest

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


// ============================


// [functions]

function testObject({ maca }){
    console.log(maca);
};

let frutas = {
    maca: "maça",
    banana: "banana",
    laranja: "laranja"
};

testObject(frutas);


function testArray([banana, ...rest]){
    console.log(rest);
};

let fruits2 = ["banana", "maça", "laranja"];

testArray(fruits2);


function test3([first, ...rest]){
    console.log((rest.join('')) + first);
};

test3("banana");