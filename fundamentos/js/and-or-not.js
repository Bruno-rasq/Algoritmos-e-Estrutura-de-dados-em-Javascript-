// ======================= operadores lógicos ====================================

// AND, OR ou NOT

//[AND ou &&]
// só retorna true caso as duas expressões forem true 
// exm: 2 > 5 && 2 < 10 -> true
// exm: 2 > 5 && 2 > 10 -> false

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