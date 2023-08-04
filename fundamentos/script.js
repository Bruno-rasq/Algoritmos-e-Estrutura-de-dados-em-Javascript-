console.log("Hello World");

// console
console.log("Console.log");
console.error("console.error");
console.warn("console.warn");

function isprime(n){

    // um array que recebe os valores em que o resto da divisão por n dá igual a 0
    let arr = [];

    for ( let i=0; i <= n; i++){
        if(n%i == 0){
            arr.push(i);
        }
    };

    // se houver mais de 2 divisores com resto inteiro, então não é primo
    let resp = arr.length > 2 ? false : true;
    return console.log(resp);
};

isprime(10);
isprime(7);
isprime(27);