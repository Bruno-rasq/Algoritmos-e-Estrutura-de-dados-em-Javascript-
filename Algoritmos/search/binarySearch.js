function Binary_Search(arr, left, right, value){

    if(right >= left){
        const index = parseInt(left + (right - left)/2);
        let current = arr[index];
        // console.log('passou')

        //caso o primeiro elemento já seja o valor da busca
        if(current === value){
            return value
        };

        // caso o valor seja menor que o indice
        if(current > value){
            return Binary_Search(arr, left, index-1, value)
        }
        // senão ...
        return Binary_Search(arr, index+1, right, value)
    }

    //caso o elemento não esteja na lista
    return -1;
};

let array = [1, 2, 3, 4, 5, 6, 8, 10];


console.log(Binary_Search(array, 0, array.length-1, 8))
console.log(Binary_Search(array, 0, array.length-1, 20))
console.log(Binary_Search(array, 0, array.length-1, 2))