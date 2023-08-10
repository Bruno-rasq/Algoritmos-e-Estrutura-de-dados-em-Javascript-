console.log("Hello World");

// console
console.log("Console.log");
console.error("console.error");
console.warn("console.warn");

function FindUnique(list){

    let unique = {}

    /*
        para cada elemento é criado um index no objeto unique e incrementado
        a quantidade de vezes que o elemento aparece
    */
    list.forEach((el) => unique[el] = unique[el] ? unique[el] + 1 : 1);

    let resp = {}

    /*
        depois de pronto o objeto, basta percorrer o objeto a procura do elemento
        cujo a incrementação é igual a 1, ou seja que apareceu somente 1 vex
        e atribuir esse elemento a variavel resp
    */
    for(i in unique){
        if(unique[i] === 1){
            resp = i;
        } 
    }

    return console.log(resp)
}

FindUnique([1,1,1,1,2,1,1]);
FindUnique([3,2,2,2]);
FindUnique([2,2,4,2]);