console.log("Hello World");

// console
console.log("Console.log");
console.error("console.error");
console.warn("console.warn");


function reflection(arr){
    let array = arr;
    let reverse = arr.map((item, indice, array) => {
        return array[array.length - indice - 1];
    });

    let response = array.concat(reverse);
    return console.log(response);
}

reflection([1,2,3]);
reflection([32, 3, 4]);