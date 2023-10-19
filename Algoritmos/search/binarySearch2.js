function BinarySearch(arr, value){

    let min = 0;
    let max = arr.length - 1;

    let search = Math.round((min+max)/2);

    for(let i = search; i < arr.length; i++){
        if(arr[i] === value){
            return value

        } else if (arr[i] < value){
            min = search + 1

        } else if (arr[i] > value){
            max = search - 1
        }
    }

    return -1
};

const array = [2,4, 5, 7, 8, 10, 12, 15]

console.log(BinarySearch(array, 10))
console.log(BinarySearch(array, 1))