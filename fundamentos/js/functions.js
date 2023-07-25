// ========================== funções ==========================

function minhaFuncao(){
    console.log("minha função");
};

minhaFuncao();
minhaFuncao();
minhaFuncao();
minhaFuncao();

//argumentos/ parametro de funções
function nomeCompleto(nome, sobrenome){
    // console.log(`nome completo: ${nome} ${sobrenome}`);
    return `nome completo: ${nome} ${sobrenome}`;
};

// nomeCompleto("bruno", "dias");
// nomeCompleto("heleno", "pires");
console.log(nomeCompleto("bruno", "dias"));
console.log(nomeCompleto("heleno", "pires"));

// const meuNome = nomeCompleto("super", "burro");
// console.log(meuNome);
const primeiroNome = "super";
const segundoNome = "burro";
const meuNome = nomeCompleto(primeiroNome, segundoNome);
console.log(meuNome);


//arrow function
const myArrowfunction = (a, b) => {
    return a + b;
};

console.log(myArrowfunction(2, 7));

const SimpleArrowFunction = (a, b) => a + b;
console.log(SimpleArrowFunction(6, 7));