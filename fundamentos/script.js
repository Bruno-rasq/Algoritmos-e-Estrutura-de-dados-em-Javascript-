console.log("Hello World");

// console
console.log("Console.log");
console.error("console.error");
console.warn("console.warn");


function CountVogal(str){

    let strg = str.toLowerCase();
    let arr = strg.split('');

    let response = arr.filter((char) => {
        if( char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
            return char
        };
    });

    return console.log(response.length);

};

CountVogal("string teste");
CountVogal("aeiou");
CountVogal("AEIOU");