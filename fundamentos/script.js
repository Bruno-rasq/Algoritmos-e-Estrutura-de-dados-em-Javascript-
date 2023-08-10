console.log("Hello World");

// console
console.log("Console.log");
console.error("console.error");
console.warn("console.warn");


function romanNumber(n){


    let valor = "";

    switch(n){
        case 1:
            valor = "I";
            break;

        case 5:
            valor = "V";
            break;

        case 10:
            valor = "X";
            break;

        case 50:
            valor = "L";
            break;

        case 100:
            valor = "C";
            break;

        case 500:
            valor = "D";
            break;

        case 1000:
            valor = "M";
            break;

        default:
    };

    return console.log(valor)

}

romanNumber(5);
romanNumber(50);
romanNumber(1000);


/*
    I = 1
    V = 5
    x = 10
    L = 50
    C = 100
    D = 500
    M = 1000

    repetem no máximo 3 vezes --> I, X, C, M
    não repetem  --> V, L D 

*/