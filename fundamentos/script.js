console.log("Hello World");

// console

console.log("Console.log");
console.error("console.error");
console.warn("console.warn");


// variaveris 

// var A = 10;
// var A = 20;

// let B = "Bruno";
// B = "teste"; 

// const C = "constante"; 

// if(true){
//     var A = 5;
// }

// console.log(A); 

// if(true){
//     let B = 10;
//     console.log(B); 
// }

// console.log(B); 



// variaveis =====> TIPOS
// Number, STRING, BOLLEAN, NULL, UNDEFINED, ARRAY, OBJECT

// const name = "Heleno"; 
// console.log(name);
// console.log(typeof name);

// let E = 20; 
// console.log(E);
// console.log(typeof E);

// let Y = 12.5;
// console.log(Y);
// console.log(typeof Y);

// let True = true;
// console.log(True);
// console.log(typeof True);

// var nulo = null; 
// console.log(nulo);
// console.log(typeof nulo);

// let age 
// console.log(age);
// console.log(typeof age);

// const array = [1, 3, 4, 5]; 
// console.log(array);
// console.log(typeof array);

// const Object = {
//     nome: "bruno", 
//     idade: 22
// }; 
// console.log(Object);
// console.log(typeof Object);



// método de string

// const nome = "Bruno dias";
// console.log(nome);
// console.log("qunatidade de caracteres: " + nome.length);

// let Array = [1,4,5,3,2];
// console.log(Array);
// console.log("quantidade de itens: " + Array.length);

// const stringToArray = nome.split(' ');
// console.log(stringToArray);

// console.log(nome.toLowerCase());
// console.log(nome.toUpperCase());

// console.log(nome.indexOf('dias'));

// console.log(nome.slice(0, 5)); 
// console.log(nome.slice(6, 10)); 



// métodos de array

// let lista = ["A", "b", "B", "c"];
// console.log(lista);

// console.log(lista[3]); 

// lista[4] = "F"; 
// console.log(lista);

// console.log(lista[lista.length - 1]); 

// lista.push("G");
// console.log(lista);
// lista.pop(); 
// console.log(lista);

// lista.unshift("N"); 
// console.log(lista);
// lista.shift(); 
// console.log(lista);


//  ============================ objetos ====================================

// const user = {
//     nome: "BRUNO",
//     idade: 22,
//     online: true,
//     array: [2, 556, 4, 2],
//     'favorite color': "violet"
// };

// console.log(user.nome);
// console.log(user.online);
// console.log(user.array[2]);
// console.log(user['favorite color']);


// destructuring...
// [objeto]
// const { nome, idade } = user;
// console.log(idade);
// console.log(nome);

// [array]
// const Arry = [2, 5, 4, 3, 8, 50];
// const [n1, n2] = Arry;
// console.log(n1);
// console.log(n2);


// JSON - javascript object notation
// objeto
// const pet = {
//     name: "Gertrudes",
//     especie: "Pato"
// }
// console.log(pet);

// const dogToJson = JSON.stringify(pet); 
// console.log(dogToJson);

// const obj = JSON.parse(dogToJson); 
// console.log(obj);

// const JSONerrado = '{"nome":"burro", "idade": "22"}';
// const obj2 = JSON.stringify(JSONerrado);
// console.log(obj2);



// // Estruuras condicionais
// let A = 10;

// if( A >= 10){
//     console.log(" A maior que 8");
// } else {
//     console.log(" A não é maior que 8");
// }

// > maior que
// < menor que
// <= menor ou igual a 
// >= maior ou igual a
// == igual a (valor)
// === igual a (tipo)
// != diferente de
// = receba!

// const nome = "bruno";

// if else
// if(nome === "joao"){
//     console.log("é joao");
// } else {
//     console.log(" não é joao");
// };

//if else if
// if(nome == "bruno"){
//     console.log("sim");
// } else if(nome != "bruno"){
//     console.log("sim, diferente");
// };

//if ternário
// let number = 10;
// let testeNumber = number >= 20 ? 'sim': 'não';
// console.log(testeNumber);


//estruturas de loop/repetições
// const mylist = [,2 ,3 ,5 ,74];
// let contador = 0;

// while(contador < mylist.length){

//     console.log("imprimindo: " + mylist[contador]);

//     // contador = contador + 1;
//     contador ++
// };


// const listaDois = ["a", "b", "c", "d", "E"];

// for (let index = 0; index < listaDois.length; index++) {
//     // const element = array[index];

//     // console.log(listaDois[index]);
//     console.log(`imprimindo: ${listaDois[index]}`); // template literals
    
// };



// //metodos de array - repetições

// const names = ["bruno", "heleno", "julio", "clara"];

// //[forEach]
// names.forEach(function(name) {
//     console.log(` o nome é: ${name}`);
// });

// //[Map]
// const modificarNames = names.map(function(name){
//     if(name === "bruno"){
//         return name = 'mrs bruno';
//     } else {
//         return name
//     };
// });

// console.log(modificarNames);

// //[filter]
// const number = [2, 5, 4, -3, 8, -9, -1];

// const NegativeNumber= number.filter(function(numbers){
//    return numbers < 0;
// });

// console.log(NegativeNumber);

// //[reduce]
// const soma = NegativeNumber.reduce(function(total, number){
//     return total + number;
// });

// console.log(soma);



// // ========================== funções ==========================

// function minhaFuncao(){
//     console.log("minha função");
// };

// minhaFuncao();
// minhaFuncao();
// minhaFuncao();
// minhaFuncao();

// //argumentos/ parametro de funções
// function nomeCompleto(nome, sobrenome){
//     // console.log(`nome completo: ${nome} ${sobrenome}`);
//     return `nome completo: ${nome} ${sobrenome}`;
// };

// // nomeCompleto("bruno", "dias");
// // nomeCompleto("heleno", "pires");
// console.log(nomeCompleto("bruno", "dias"));
// console.log(nomeCompleto("heleno", "pires"));

// // const meuNome = nomeCompleto("super", "burro");
// // console.log(meuNome);
// const primeiroNome = "super";
// const segundoNome = "burro";
// const meuNome = nomeCompleto(primeiroNome, segundoNome);
// console.log(meuNome);


// //arrow function
// const myArrowfunction = (a, b) => {
//     return a + b;
// };

// console.log(myArrowfunction(2, 7));

// const SimpleArrowFunction = (a, b) => a + b;
// console.log(SimpleArrowFunction(6, 7));



// // ========================== classes ==========================

// class pet {
//     constructor(name, especie){
//         this.name = name
//         this.especie = especie
//     }

//     petsDetails(){
//         return console.log(` ${this.name} está com fome`);
//     }
// };

// const duck = new pet( "gertrudes", "pato" );
// console.log(`nome do pet: ${duck.name}`);
// console.log(`Espécie: ${duck.especie}`);

// const coelho = new pet( "Osvaldo", "coelho" );
// console.log(`nome do pet: ${coelho.name}`);
// console.log(`Espécie: ${coelho.especie}`);

// duck.petsDetails("gertrudes");


// //herança
// class superpets extends pet {
//     constructor( name, especie, idade){
//         super( name, especie)
//         this.idade = idade
//     }

//     //static
//     static digaOla(){
//         console.log("Olá");
//     };
// };

// const fred = new superpets("fred", "galo", "4 mese");
// console.log(`nome: ${fred.name}`);
// console.log(`idade: ${fred.idade}`);

// superpets.digaOla();


// // DOM - document object model =============== 

// const title = document.getElementById("title");
// console.log(title);

// //getElementBYId -> pega o elemento pelo id
// //getElelementByClassName -> pega o elemento pelo nome da classe
// // getElementByTagname -> pega o elemento pelo nome da tag

// //[querySelector]

// //querySelector -> pega por id, class, tag etc..
// //querySelectorAll -. pega todos os elementos com mesma classe, tag etc.. id tbm mas id é unico

// const sametitle = document.querySelector("#title");
// console.log(sametitle);

// const texts = document.querySelectorAll(".text");
// console.log(texts);

// console.log(texts[2]);

// texts.forEach((text) => {
//     console.log(text.textContent.toUpperCase());
// });

// //manipulando o dom
// title.textContent = "Mudei o titulo";

// texts[0].innerHTML = '<span> alterando html do elemento </span>';

// texts[1].style.backgroundColor = 'blue';
// texts[1].style.color = 'white';

// texts[3].classList.add("my-class"); // adiciona class
// texts[3].classList.remove("my-class"); // remove class

// texts[4].remove(); // excluiu um elemento

// //eventos

// const btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//     console.log("clicou")
// });



// ======================= operadores lógicos ====================================

// AND, OR ou NOT

//[AND ou &&]
// só retorna true caso as duas expressões forem true 
// exm: 2 < 5 && 2 < 10 -> true
// exm: 2 > 5 && 2 < 10 -> false

let idade = 16;
let nome = "bruno";

if(idade == 16 && nome == "bruno"){
    console.log("teste 01: verdadeiro");
} else {
    console.log("teste 01: falso");
};

let idade_teste_2 = 16;
let nome_teste_2 = "heleno";

if(idade_teste_2 == 16 && nome_teste_2 == "bruno"){
    console.log("teste 02: verdadeiro");
} else {
    console.log("teste 02: falso");
};


if( 2 == 2 && true == true && 2 > 0){
    console.log("teste 03: verdadeiro")
} else {
    console.log( "teste 03: falso")
};

if((1 == 1 && 3 < 2) && true){
    console.log("teste 04: verdadeiro")
} else {
    console.log( "teste 04: falso")
};

//[OR ou ||]
// retorna como true caso uma das expressões seja verdadeira
// exm: 2 < 5 || 2 < 10 -> true
// exm: 2 > 5 || 2 < 10 -> true
// exm: 2 > 5 || 2 > 10 -> false

let nome_OR = "julia";
let idade_OR = 15;

if(nome_OR == "julia" || idade_OR == 18){
    console.log( "teste OR: verdadeiro")
} else {
    console.log( "teste OR: falso")
};

if(nome_OR == "roberta" || idade_OR == 15){
    console.log( "teste OR-2: verdadeiro")
} else {
    console.log( "teste OR-2: falso")
};

if(nome_OR == "roberta" || idade_OR == 21){
    console.log( "teste OR-3: verdadeiro")
} else {
    console.log( "teste OR-3: falso")
};

if((nome_OR == "roberta" || idade_OR == 15) && 1 == 4){
    console.log( "teste OR-4: verdadeiro")
} else {
    console.log( "teste OR-4: falso")
};

//[NOT ou !]
// muda o valor lógico de uma expressão
// o que era verdadeiro vira falso e vice-versa
// exm: 2 == 2 -> true
// exm:2 !== 2 -> false

if( 2 == 2 ){
    console.log("teste not-01: verdadeiro")
} else {
    console.log("teste not-01: falso")
};

if( 2 !== 2 ){
    console.log("teste not-02: verdadeiro")
} else {
    console.log("teste not-02: falso")
};

if(!true){
    console.log("teste not-03: verdadeiro")
} else {
    console.log("teste not-03: falso")
};

let nome_not = "bruno";

if(!(nome_not == "julia")){
    console.log("teste not-04: verdadeiro")
} else {
    console.log("teste not-04: falso")
};