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

// array
//   2 valore
//   desconsiderando itens 
//   ...rest


// functions