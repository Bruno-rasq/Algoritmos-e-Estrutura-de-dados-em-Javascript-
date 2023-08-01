// ========================= REGEX ===========================

// RegEx = regular expressions

// o regex é uma notação que faz verificações em textos com três principais aplicações

// [buscar] 
//   serve para encontrar padrões em um texto, como por exemplo emcontrar
//   textos em formato de data 

//[validações]
//   verificar se determinada informação atendo um padrão especifico
//    como por exemplo verificar se o valor de um CPF está em um modelo válido

//[substituições]


// exem:

// ctrl + f ====>  abre uma caixa de busca com opção de buscar por regex
// tudo dentro de colchetes representa um caracter [o] -> ocaliza todos os "O" do arquivo
// [02] -> busca por 0 ou 2
// [0-9] -> busca por numeros de 0 a 9 

// [0][0] -> busca por dois zeros juntos no texto 00
// [0]{2} -> mesma coisa // quantificador
// [0][0][0]  ou [0]{3}

// o $ no regexrepresenta o fim da linha, basicamente começa a busca pelo final da linha
// 098 7didgystyghr 567 aqui [0-9]{3} - ele vai pegar o "098", com o $ ele pega o "567"
// oposto ao $ tem o ^, que começa a busca pelo inicio da linha


// [0-9]+[-][a-z]

// 36784956784-y
// 36784956784-g
// 36784956784-r
// 36767956784-y
// 36784956784-t
// 36784956784-a
// 36784896784-b
// 36784956784-l
// 36784956784-f


// CPF = 037.654.890.00
// regex = [0-9]{3}[.][0-9]{3}[.][0-9]{3}[.][0-9]{2}



// exemplo trocando datas do formato americano para o formato utilizado no brasil

// 24/05/2020

{
    data: "22/07/2001"
}

<data>01/08/2023</data>

// [0-9]{4}[-][0-9]{2}[-][0-9]{2}     para       [0-9]{2}[-][0-9]{2}[-][0-9]{4}
// se adicionar um () envolvendo um comando do regexele acaba se tornando um grupo

//([0-9]{4}) [-] ([0-9]{2}) [-] ([0-9]{2}) 
// grupo1          grupo 2       grupo3

// o $ tambem pode ser utilizadfo para manipular a ordem dos grupos

// $1/$2/$3   para     $3/$2/$1





// =========== regex =============


// duas formas de criar expressões regular: expressão literal e atravez do constructor do objeto

//[expressão literal]

// expressões simples são aquelas que são iniciada e fechadas com barra /
// exm: /[t,t]/ 
//      /[0-9]{4}/

function RegExLiteral(strg){

    //substituindo todos os "P" por B, com expressão literal
    let response = strg.replace(/[p,P]/g, "B");
    return console.log(response);

};

let arr = "B t U F P B P Y r p";
console.log(arr);

RegExLiteral(arr);
console.log( /[p,P]/);
console.log( typeof /[p,P]/);




//[chamando o constructor do objeto regex]

// vale citar que no javascript o regexé considerado um objeto tbm

function RegExObject(B){

    const Regex = new RegExp("P");

    let response = B.replace(Regex, "A");
    return console.log(response);
};

let B = "G K T B P i P r p p R U ";
console.log(B);

RegExObject(B);





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