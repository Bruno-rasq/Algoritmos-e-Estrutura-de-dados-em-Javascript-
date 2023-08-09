console.log("Hello World");

// console
console.log("Console.log");
console.error("console.error");
console.warn("console.warn");

function allEquals(list){

    let response = list.every((value) => value == list[0]);

    return console.log(response);
}

allEquals([1,2,1,1,1]);
allEquals([2,2,2]);