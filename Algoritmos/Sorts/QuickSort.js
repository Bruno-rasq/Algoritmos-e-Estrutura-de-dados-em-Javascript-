function QuickSort(arr){

    if(arr.length < 2){
        return arr
    }

    let pivo = arr[arr.length - 1]; // ultimo elemento
    let left = [] // menor5es que o ultimo valor
    let right = [] // maiores que o ultimo valor

    for(let i = 0; i < arr.length-1; i++){
        if(arr[i] < pivo){
            left.push(arr[i])

        } else {
            right.push(arr[i])
        }
    }

    return [...QuickSort(left), pivo, ...QuickSort(right)]

};

let array = [-2, 4, 1, 22, -3, 4];
console.log(QuickSort(array))

/*
    complexidade:

    melhor caso => O(n^2)
    media => O(nLogN)
    
 */