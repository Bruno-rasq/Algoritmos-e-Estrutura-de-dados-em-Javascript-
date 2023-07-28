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

// let idade = 16;
// let nome = "bruno";

// if(idade == 16 && nome == "bruno"){
//     console.log("teste 01: verdadeiro");
// } else {
//     console.log("teste 01: falso");
// };

// let idade_teste_2 = 16;
// let nome_teste_2 = "heleno";

// if(idade_teste_2 == 16 && nome_teste_2 == "bruno"){
//     console.log("teste 02: verdadeiro");
// } else {
//     console.log("teste 02: falso");
// };


// if( 2 == 2 && true == true && 2 > 0){
//     console.log("teste 03: verdadeiro")
// } else {
//     console.log( "teste 03: falso")
// };

// if((1 == 1 && 3 < 2) && true){
//     console.log("teste 04: verdadeiro")
// } else {
//     console.log( "teste 04: falso")
// };

//[OR ou ||]
// retorna como true caso uma das expressões seja verdadeira
// exm: 2 < 5 || 2 < 10 -> true
// exm: 2 > 5 || 2 < 10 -> true
// exm: 2 > 5 || 2 > 10 -> false

// let nome_OR = "julia";
// let idade_OR = 15;

// if(nome_OR == "julia" || idade_OR == 18){
//     console.log( "teste OR: verdadeiro")
// } else {
//     console.log( "teste OR: falso")
// };

// if(nome_OR == "roberta" || idade_OR == 15){
//     console.log( "teste OR-2: verdadeiro")
// } else {
//     console.log( "teste OR-2: falso")
// };

// if(nome_OR == "roberta" || idade_OR == 21){
//     console.log( "teste OR-3: verdadeiro")
// } else {
//     console.log( "teste OR-3: falso")
// };

// if((nome_OR == "roberta" || idade_OR == 15) && 1 == 4){
//     console.log( "teste OR-4: verdadeiro")
// } else {
//     console.log( "teste OR-4: falso")
// };

//[NOT ou !]
// muda o valor lógico de uma expressão
// o que era verdadeiro vira falso e vice-versa
// exm: 2 == 2 -> true
// exm:2 !== 2 -> false

// if( 2 == 2 ){
//     console.log("teste not-01: verdadeiro")
// } else {
//     console.log("teste not-01: falso")
// };

// if( 2 !== 2 ){
//     console.log("teste not-02: verdadeiro")
// } else {
//     console.log("teste not-02: falso")
// };

// if(!true){
//     console.log("teste not-03: verdadeiro")
// } else {
//     console.log("teste not-03: falso")
// };

// let nome_not = "bruno";

// if(!(nome_not == "julia")){
//     console.log("teste not-04: verdadeiro")
// } else {
//     console.log("teste not-04: falso")
// };


// ============= break e continue ===================

//com break podemos encerrar uma instrução
// com continue podemos pular uma instrução
// utilizado na maioria das vezes em loops

// for(let i = 10; i >= 0; i--){

//     console.log("numero: " + i);

//     if( i === 5){
//         break;
//     }

// };

// console.log("deu o break");


// let x = 0;

// while(x <= 100){
    
//     x += 10;

//     if(x === 60){
//         continue;
//     }

//     console.log("numero: " + x)

//     if(x === 100){
//         break;
//     }
// };



// // ============================ escopo =======================

// //no javascript podemos ter varios escopos
// //o global que é iniciado em toda a aplicação
// //e os locais, que podem existir em varias instruções como as funções

// //escopos possibilitam a existencia de duas variaveis de mesmo nome com valores distintos

// let x = 10;
// console.log(x + " escopo global");

// function escopInterno(){
//     let x = 20;
//     console.log(x + " escopo interno");
// };

// escopInterno();


// var y = 10;
// console.log(y + " escopo global");

// function escopInt(){
//     var y = 20;
//     console.log(y + " escopo interno");
// };

// escopInt();


// function varInt(){
//     let z = 0;
//     console.log(z);
// };

// varInt();
// // console.log(z); // variavel z não está no escopo global

// //somente variaveis de escopo global podem entrar no escopo interno de uma função
// //variaveis de escopo interno não podem sair do seu escopo
// let a = 70;

// function teste(number){
//     console.log(number)
// };

// teste(a);

// //estruturas como if, for, while se encaixam como escopo global
// //a menos que estejam dentro do escopo de uma função



// // ================ THIS ====================

// //fora do escopo local o THIS sempre se refere ao objeto global window
// // em objeto o THIS vai se referir a instancia e pode acessar suas propriedades

// // var teste = 5;

// // console.log(this.teste);

// const pessoa = {
//     //propriedades chave / valor
//     name: "bruno",
//     idade: 22,

//     //métodos 
//     falar: function(){
//         console.log("Olá")
//     },

//     DizerNome: function(){
//         console.log("o meu nome é " + this.name)
//     },

//     aniversario: function(){
//         this.idade += 1;
//     },

//     saudacao: function(){
//         return 'Salve, ' + this.name;
//     }
// };

// pessoa.DizerNome();

// console.log(pessoa.idade);

// pessoa.aniversario();

// console.log(pessoa.idade);

// console.log(pessoa.saudacao());



// // ============ CALLBACK FUNCTIONS ============

// // permite executar uma função depois de uma ação
// // sendo um conceito fundamental para entender a programação assincrona

// function exibir(num){
//     console.log("resultado da operação: " + num);
// }

// function soma(a, b, callback){
//     var op = a + b;
//     callback(op);
// };

// function multiplicacao(a, b, cb){
//     var op = a * b;
//     cb(op);
// };

// soma(2, 2, exibir);
// multiplicacao(5, 2, exibir);


// // ============== SETIMEOUT E SETINTERVAL ============

// //podemos com estas funçãoes cirar ações no software que executam depois de um tempo ou de tempos em tempos.
// //um dos argumentos destas funções são as callback functions

// // [setimeout]
// // executa uma função depois de determinado tempo.

// console.log("antes do setimeou");

// setTimeout(function(){
//     //funções que são passadas de alrgumento para outras
//     //são sonsideradas callback
//     console.log("testando o setimeout");

// }, 6000); // esse valor indica o tempo 1ms = 1000ms = 1s

// console.log("depois do setimeou");


// // [setInterval]
// // executa uma função de tempos em tempos infinitamente

// setInterval(function(){

//     console.log("testando o setInterval");

// }, 6000);


// // ====================CLEARTIMEOUT E CLEARINTERVAL ================

// //podemos por um fim em seTimeOut e setInterval por meio destes dois métodos.
// // então quando determinada condição for correspondida os timers não serão mais executados.

// //[clearTimeOut]

// let x = 0;

// let mytimer = setTimeout(function(){
//     console.log("o valor de x é 0");
// }, 1000);

// x = 5;

// if(x > 0){
//     clearTimeout(mytimer);
//     console.log("parou a excução")
// };


// //[ClearInterval]

// var myInterval = setInterval(() => {

//     console.log("meu Intervalo");

// }, 500);

// setTimeout(() => {

//     console.log("parando o intervalo");
//     clearInterval(myInterval);

// }, 1500);


// =================== EVENTOS ======================

//por meio dos eventos podemos mapear algumas ações do usuário.
// como movimento do mouse, click, mouse entrando ou saindo de um elemento, carregamento da página e etc...

// são possiveis de swerem feitos com css, porém quando o evento fica complexo a melhor forma é com js.

//[OnLoad]
// o onload é ativado ao carregar a página

// window.onload = function(){
//     console.log("carregou o DOM");
//     var title = document.querySelector("#title");
//     console.log(title);
    
// };

// console.log("carregou o JS");

//[Onclick]
// o click é ativado quando o usuário clica em um elemento em que o evento foi atrelado

// let btn = document.querySelector("#btn");

// btn.addEventListener("click", () => {
//     // console.log("click");
//     console.log("click");

//     btn.style.color = "red";
// });

// var title = document.querySelector("#title");

// title.addEventListener("click", () => {
//     document.body.style.background = "lightgray";
// })

// //[dblclick] //não funciona mais
// // evento de duplo click 
// btn.addEventListener("dblclick", () => {
//     console.log("click duplo");
// });


//[mouseover] e [mouseout]

// var title = document.querySelector("#title");
// console.log(title);

// title.addEventListener("mouseover", () => {
//     title.style.backgroundColor = "yellow";
// });

 //obs: por algum motivo o evento mouseover está se comportando como click
 //quando o inspecionar está aberto

//  title.addEventListener("mouseout", () => {
//     title.style.backgroundColor = "white";
//  });


// // [keydown]
// // o evento keydown é ativado quando uma tecla é pressionada;
// // o keydown é atrelado quando a tecla é precionada
// // keyup é o evento atrelado quando a tecla é solta

// //mapeamento de tecla

// document.addEventListener("keydown", (event) => {
//     // console.log(event.key);

//     if(event.key === "Enter"){
//         console.log(event.key);
//     }

// });

// document.addEventListener("keyup", (e) => {

//     if(e.key === "Enter"){
//         console.log("soltei o " + e.key)
//     };

// });