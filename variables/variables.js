// console.log("teste");

// ========================================

// diferença entre VAR, LET e CONST
// var nome = "bruno";
// nome = "joao";

// console.log(nome);

// let nome2 = "joao";
// nome2 = "bruno";

// console.log(nome2);

// const nome3 = "bruno";
// nome3 = "joao";

// console.log(nome3); // constantes não podem ser alteradas


// ========================================

// function trocarNome(){
//     var nome = "pedro";
//     console.log(nome);
// };

// nome = "bruno";
// console.log(nome);

// trocarNome(); // com var a diferença de escopo proporciona usar o mesmo nome de variavel para valores distintos

// var nome2 = "bruno-escopo global";

// function nometeste(){
//     nome2 = "joao-escopo interno";
//     console.log(nome2);
// };

// nometeste();
// console.log(nome2);

// nome2 = "teste"
// console.log(nome2);

console.log("======== VAR =========");

var aaa = "A";
// var num = 33;com o var é possivel utilizar o mesmo nome de variavel no mesmo escopo

function mostrarNum(){
    var aaa = "B";
    console.log(aaa);
};

if(true){
    var aaa = "C"; // o if alterou o valor da variavel quando é var
    console.log(aaa);
};

for(let i = 0; i <= 2; i++){
    var aaa = "D";
    console.log(aaa);
};

mostrarNum();
console.log(aaa);


console.log("======== LET =========");

let bbb = 11;
// let nume = 66; com o let não é permitido usar o mesmo nome de variavel no mesmo escopo

function mostrarNum(){
    let bbb = 22;
    console.log("numero é:" + bbb);
};

if(true){
    let bbb = 33; // com o let o if não alterou o valor da variavel
    console.log(bbb);
};

for(let i = 0; i <= 2; i++){
    let bbb = 44;
    console.log(bbb);
};

mostrarNum();
console.log(bbb);

console.log("======== CONST =========");

const ccc = 1;
// ccc = 2; constantes não devem mudar

function exibirConst(){
    const ccc = 2;
    console.log(ccc);
};

if(true){
    const ccc = 3;
    console.log(ccc);
};

for(let i = 0; i <= 2; i++){
    const ccc = 4;
    console.log(ccc);
};

console.log(ccc);
exibirConst();


