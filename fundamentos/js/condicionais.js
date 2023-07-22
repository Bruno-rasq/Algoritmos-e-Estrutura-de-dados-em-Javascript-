// // Estruuras condicionais
let A = 10;

if( A >= 10){
    console.log(" A maior que 8");
} else {
    console.log(" A não é maior que 8");
}

// > maior que
// < menor que
// <= menor ou igual a 
// >= maior ou igual a
// == igual a (valor)
// === igual a (tipo)
// != diferente de
// = receba!

const nome = "bruno";

// if else
if(nome === "joao"){
    console.log("é joao");
} else {
    console.log(" não é joao");
};

//if else if
if(nome == "bruno"){
    console.log("sim");
} else if(nome != "bruno"){
    console.log("sim, diferente");
};

//if ternário
let number = 10;
let testeNumber = number >= 20 ? 'sim': 'não';
console.log(testeNumber);
