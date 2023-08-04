console.log("Hello World");

// console
console.log("Console.log");
console.error("console.error");
console.warn("console.warn");

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

// renomeando
// const { idade: age } = pessoa;
// console.log(age);

({ idade: age } = pessoa);
console.log(age);