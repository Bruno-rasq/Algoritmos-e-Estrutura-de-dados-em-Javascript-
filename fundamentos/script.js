console.log("Hello World");

// console
console.log("Console.log");
console.error("console.error");
console.warn("console.warn");


/*
    04 - two sum
    @function twoSum(nums, target)
    a função receberá dois parametros @nums que é uma lista de valores e @target que é um alvo
    então deverá verificar se em @nums possue valores menores que @target, então retornar o indice
    deles no array

    test 1 -> ([2, 4, 5], 6) => [0, 1, 2]
    test 2 -> ([3, 3], 6) => [0, 1]

*/
function twoSum(nums, target){

    let response = [];

    for(let i =0; i<nums.length; i++){

        let index = nums.indexOf(nums[i]);

        while ( index != -1){
            response.push(index);
            index = nums.indexOf(nums[i], index);
        }
    }

    return console.log(response)
}

twoSum([2, 4, 5], 6);
twoSum([3, 3], 6);


