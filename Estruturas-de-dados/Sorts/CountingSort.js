let numbers = [1, 3, 2, 5, 4, 7]; // arry que será ordenado

function CountingSort(arry){

    let count = [];
    let i, z = 0;
    let max = Math.max(...arry);

    //inicializa o contador..
    for(i = 0; i <= max; i++){
        count[i] = 0;
    };

    for(i = 0; i < arry.length; i++){
        count[arry[i]]++;
    };

    for(i = 0; i <= max; i++){
        while(count[i]-- > 0){
            arry[z++] = i;
        }
    };

    return arry;

};

let Sort = CountingSort(numbers)
console.log(Sort)





//testes...

let c = [3, 3, 5, 2, 9, 9];

let counting = []
let maxC = Math.max(...c)
let i, z = 0

console.log(`Array: ${c.join(' ')}`)
console.log(`max: ${maxC}`)

//inicia contgem
for(i = 0; i<=maxC; i++){
    counting[i] = 0;
}
console.log(`count part1 : ${counting.join(' ')}`)

//posição referente ao elemento recebe a quantidade de elementos
for(i = 0; i<c.length; i++){
    counting[c[i]]++
}
console.log(`count part2 : ${counting.join(' ')}`)


//
for(i = 0; i <= maxC; i++){
    while(counting[i]-- > 0){
        c[z++] = i;
    }
};
console.log(
    `count part3 : ${counting.join(' ')}`
)
console.log(
    `array Ordenado: ${c.join(' ')}`
)