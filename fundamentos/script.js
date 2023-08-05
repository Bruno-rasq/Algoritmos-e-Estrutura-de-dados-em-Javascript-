console.log("Hello World");

// console
console.log("Console.log");
console.error("console.error");
console.warn("console.warn");


function SortList(list){
    let response = list.sort((a,b) => {
        if(a.length > b.length) return 1;
        if(a.length < b.length) return -1;

        return 0;
    });

    return console.log(response);
}

SortList(["eye", "mouse", "a"]);