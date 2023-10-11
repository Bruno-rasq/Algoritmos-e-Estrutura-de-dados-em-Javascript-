let numbers = [1, 3, 2, 5, 4, 7]; // arry que será ordenado

function CountingSort(arry){

    let count = [];
    let i, z = 0;
    let max = Math.max(...arry);
    let output = [];

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

    for(i = 0; i < arry.length; i++){
        output[i] = arry[i]
    };

    return output;

};

let Sort = CountingSort(numbers)
console.log(Sort)