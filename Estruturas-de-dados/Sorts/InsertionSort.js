function InsertionSort(arry){

    let i = 0

    while( i < arry.length){
        let x = arry[i]
        let j = i - 1

        while(j >= 0 && arry[j] > x){
            arry[j+1] = arry[j]
            j = j - 1
        }
        arry[j+1] = x
        i = i + 1
    }

    return arry
};

let sort = InsertionSort([3, 3, 5, 2, 9, 9])
console.log(sort)