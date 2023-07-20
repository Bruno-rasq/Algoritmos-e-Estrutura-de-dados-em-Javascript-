// Na verdade arrays são considerados objetos, com diferença de um objeto
// funcionar em uma estrutura de propriedade (chave / valor) e metodos
//  enquanto no array é uma lista de itens acessados atravez do seu indice

// obeservação o indice de um arraay sempre começa no valor 0(zero)

var array = [1, 2, 3, 4]; //array são envolvidos por colchetes
var carro = {}; // objetos são envolvidos por chaves

var A = [1, "bruno", true, {nome: "davi"}];
console.log(A);

console.log("====================")


// ========= FORMA DE ACESSAR UM ITEM DO ARRAY =========
let B = [2, 5, 4, 6, 22];

console.log(B);
console.log("Capturando um item do array => " + B[1]); // deverá imprimir o valor 5

console.log("====================")


// ========== FORMAS DE INSERIR UM VALOR EM UM ARRAY =======
let C = [3, 44, 6, 43, 22, 0];
console.log(C);

C[6] = 22; // inserindo um valor a um indice que ainda não existe
console.log(C);

C.push("teste"); // metodo push inseri um valor no final do array
console.log(C);

console.log("====================")


// =========== TIPO DE DADOS ==================
let D = ["bruno", "heleno", "mario", "que mario?"];
console.log(D)
console.log(typeof D);