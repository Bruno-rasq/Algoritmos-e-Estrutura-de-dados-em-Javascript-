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

var num = 22;
// var num = 33;com o var é possivel utilizar o mesmo nome de variavel no mesmo escopo

function mostrarNum(){
    var num = 33;
    console.log("numero é:" + num);
};

if(true){
    var num = 44; // o if alterou o valor da variavel quando é var
    console.log(num);
};

mostrarNum();
console.log(num);


console.log("======== LET =========");

let nume = 22;
// let nume = 66; com o let não é permitido usar o mesmo nome de variavel no mesmo escopo

function mostrarNum(){
    let nume = 33;
    console.log("numero é:" + nume);
};

if(true){
    let nume = 44; // com o let o if não alterou o valor da variavel
    console.log(nume);
};

mostrarNum();
console.log(nume);

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


