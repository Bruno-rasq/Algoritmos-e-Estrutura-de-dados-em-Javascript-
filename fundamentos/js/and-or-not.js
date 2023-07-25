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