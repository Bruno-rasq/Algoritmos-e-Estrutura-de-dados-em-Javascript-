console.log("Hello World");

// console
console.log("Console.log");
console.error("console.error");
console.warn("console.warn");


function divisors(n){

    let cont = n;
    let resp = [];

    for(let i =0; i <= cont; i++){
        if(cont%i == 0){
            resp.push(i);
        }
    };

    return console.log(resp);
}

divisors(8);
divisors(10);