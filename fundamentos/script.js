console.log("Hello World");

// console
console.log("Console.log");
console.error("console.error");
console.warn("console.warn");


let texto = "isto é um texto, e este texto será usado para testar o funcionamento de regEx em texto";
let regEx = /texto/g;

let response = texto.match(regEx);
console.log(response);

let response2 = regEx.exec(texto);
console.log(response2);

let response3 = regEx.test(texto);
console.log(response3);


// =========== expressions flag ============

// expressions flag são estes carcateres que aparecem depois da barra de fechamento
// ele habilitam alguma funcionalidade extra para a expressão

// por exemplo o G que faz com que o todas ocorencias valida da expressão apareça
// ou o I que ativa o case Insensitive, possibilitando pegar letras mausculas e minusculas


// ==========================================

// . -> ponto sozinho pega todos os caracteres, como o * global do css e etc...
// uma letra e um ponto "A." pega todos os A e o caracter sucessor seja ele qualquer

// | -> significa "ou" exm: o | ó pega letra o com ou sem acento
// () -> agrupa o comando em um subgrupo
// [] -> vai buscar poelas ocorrencias dentro de colchetes ex: [abc] vai procurar pelas letra abc juntas ou separadas


// sequencias são feitas atravez so traço [a-z] carcateres de a ate z, ou [0-9] numeros de 0 a 9
// ^ funciona como uma negação exm: [^ex] pega todos os carcateres menos o E e o X
// (e+) o + nesse caso significa a letra e uma vez ou mais de uma vez, agrupando quando tiver mais de uma ocorrencia
// ? serve como um opcional


// {}  o valor que estiver dentro de chaves significa a quantidade de vezes que um determinado grupo deverá aparecer
// exm:   e{2}   vai pegar apenas as ocorrencias que tenha dois E juntos
// exm:   e{2,}  pega todas as ocorrencias que tenho 2 Es ou mais
// exm:   e{2,5} pega todas as ocorrencias em que o E aparece no minimo duas vezes e no máximo 5


// ^texto   verifica se o texto escrito começa com 'texto'
// texto$   verifica se o texto escrito termina com 'texto

//  \       serve para expressões literais
// emx: o ponto(.) pega todas os caracteres, porem se quiser pegar literalmente um ponto(.) utiliza-se a contra barra
// /\./
