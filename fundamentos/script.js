console.log("Hello World");

// console
console.log("Console.log");
console.error("console.error");
console.warn("console.warn");


function removedups(list){
    let resp = list.filter((valor, indice, self) => {
        return self.indexOf(valor) === indice;
    });

    return console.log(resp);
}

removedups([11, 23, 4, 4, 3, 3, 5]);
removedups([23, 23, 4, 4, 5]);