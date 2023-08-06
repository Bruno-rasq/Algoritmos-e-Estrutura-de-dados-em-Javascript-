console.log("Hello World");

// console
console.log("Console.log");
console.error("console.error");
console.warn("console.warn");


function findSecond(list){
    list.sort((a,b) => {
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
    });

    let response = list[list.length - 2];
    return console.log(response);
}

findSecond([42, 2, 57, 1000]);
findSecond([3, 4, 67, 8, 9, 10]);