console.log("Hello World");

// console
console.log("Console.log");
console.error("console.error");
console.warn("console.warn");


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

