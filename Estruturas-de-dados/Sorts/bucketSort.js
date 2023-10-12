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

//implementando bucket sort
function BucketSort(arry, BucketSize){

    if(arry.length === 0){
        return arry;
    };

    //declarando variaveis
    let i,
        minValue = arry[0],
        maxValue = arry[0],
        bucketSize = BucketSize || 5;

    
    arry.forEach((current) => {
        if(current < minValue){
            minValue = current
        } else if(current > maxValue){
            maxValue = current
        }
    });

    //inicializando os baldes...
    let bucketCount = Math.floor((maxValue - minValue) / bucketSize + 1);
    let AllBuckets = new Array(bucketCount);

    for(i = 0; i < AllBuckets.length; i++){
        AllBuckets[i] = [];
    };


    // inserindo valores nos baldes
    arry.forEach((current) => {
        AllBuckets[Math.floor((current - minValue) / bucketSize)].push(current)
    });

    arry.length = 0;

    AllBuckets.forEach((bucket) => {
        InsertionSort(bucket);
        bucket.forEach((element) => {
            arry.push(element)
        })
    });

    return arry;
}

let test = BucketSort([2.3, 1.3, 1, 3, 4, 5, 1], 5);
console.log(test)