function MergeSort(arr){

    if(arr.length < 2){
        return arr
    }

    let mid = Math.floor(arr.length / 2);
    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid, );

    return Merge(MergeSort(leftArr), MergeSort(rightArr));
};

function Merge(leftArr, rightArr){

    let sortArr = [];

    while(leftArr.length && rightArr.length){
        if(leftArr[0] <= rightArr[0]){
            sortArr.push(leftArr.shift())
        } else {
            sortArr.push(rightArr.shift())
        }
    };

    return [...sortArr, ...leftArr, ...rightArr]
};

const array = [-3, 5, 1, 0, -2, 44];
console.log(MergeSort(array));


/*
    complexidade: O(nLogn)
*/