// método de string

// [length]
// usado para saber a quantidade de alguma coisa, letras, numeros, itens e etc...
const nome = "Bruno dias";
console.log(nome);
console.log("qunatidade de caracteres: " + nome.length);

let Array = [1,4,5,3,2];
console.log(Array);
console.log("quantidade de itens: " + Array.length);


// [split]
// transforma uma string em array, precisa passar um separador
const stringToArray = nome.split(' ');
console.log(stringToArray);

// [ToCase]
// usado para mudar a formatação do texto
// toLowerCase => texto em caixa baixa
// toUpperCase => texto em caixa alta.
console.log(nome.toLowerCase());
console.log(nome.toUpperCase());

// [indexOf]
// encontra o indice de algo
console.log(nome.indexOf('dias'));

// [slice]
// fatiar/ extrair uma parte de uma string
console.log(nome.slice(0, 5)); // => extrai o Bruno
console.log(nome.slice(6, 10)); // => extrai o dias



// métodos de array

let lista = ["A", "b", "B", "c"];
console.log(lista);

console.log(lista[3]); // resgatar um valor atraves de um indice

lista[4] = "F"; // atribuição de um valor
console.log(lista);

console.log(lista[lista.length - 1]); // capturar o ultimo elemento

lista.push("G");// adiciona ao final da lista um elemento
console.log(lista);
lista.pop(); // elimina o ultimo elemnto da lista
console.log(lista);

lista.unshift("N"); // adiciona um elemento no inicio de uma lista
console.log(lista);
lista.shift(); //elimina o primeiro elemento da lista
console.log(lista);
