function trocarNome(){
    var nome = "pedro"; // escopo da função
    console.log(nome);
};

nome = "bruno"; //escopo global
console.log(nome);

trocarNome(); 

// Variavel do tipo Var possibilita implementação de valores
// distintos para a mesma variavel dependendo do nivel do escopo.
// as duas variaveis saõ Var e possuem o mesmo nome "nome", porem valores diferentes


let nome2 = "bruno-escopo global";
console.log(nome2);

function nometeste(){
    nome2 = "joao-escopo interno";
    console.log(nome2);
};

nometeste();
nome2 = "teste"
console.log(nome2);

// o mesmo tambem acontece com o let, as duas variaveis possuem o mesmo nome
// porem a diferença de escopo difere os valores atribuidos

// [observação] é exibido o primeiro valor da variavel, no caso o "bruno-escopo global"
// apenas se a houver uma exibição do valor antes da chamada da função

var nome3 = "bruno-escopo global";

function nometeste(){
    nome3 = "joao-escopo interno";
    console.log(nome2);
};

nometeste();
console.log(nome3);

nome2 = "teste"
console.log(nome3);

// o valor é reescrito antes e nesse caso só exibirá "joao-escopo interno", "joao-escopo interno"
//  e "teste"


let num = 22;

function mostrarNum(){
    let num = 33;
    console.log("numero é:" + num);
};

mostrarNum();
console.log(num);

// ===============================================

var aaa = 22;
// var aaa = 33;com o var é possivel utilizar o mesmo nome de variavel no mesmo escopo

function mostrarNum(){
    var aaa = 33;
    console.log("numero é:" + aaa);
};

if(true){
    var aaa = 44; // o if alterou o valor da variavel quando é var
    console.log(aaa);
};

mostrarNum();
console.log(aaa);


console.log("=================");
// [LET]

let bbb = 22;
// letbbbe = 66; com o let não é permitido usar o mesmo nome de variavel no mesmo escopo

function mostrarNum(){
    let bbb = 33;
    console.log("numero é:" + bbb);
};

if(true){
    let bbb = 44; // com o let o if não alterou o valor da variavel
    console.log(bbb);
};

mostrarNum();
console.log(bbb);