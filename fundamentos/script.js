console.log("Hello World");

// console
console.log("Console.log");
console.error("console.error");
console.warn("console.warn");


function SumRange(list, n){
    let response = 0;
    for(let i = 0; i < n; i++){
        response += list[i]
    };

    return console.log(response);
};

SumRange([3,10,5], 3);
SumRange([14,2, 2,5], 2);