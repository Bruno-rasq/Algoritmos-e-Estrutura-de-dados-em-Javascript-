console.log("Hello World");

// console
console.log("Console.log");
console.error("console.error");
console.warn("console.warn");


// não resolvido
function AllEquals(arr){

    let response = arr.every((n) => n === n);

    return console.log(response);
};

AllEquals([1, 1, 1, 1, 1, 1]);
AllEquals([1, 3, 1, 2, 1, 1]);