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

        if(nums[i] <= target){
            
            let index = nums.indexOf(nums[i]);

            while ( index != -1 ){
                response.push(index);
                index = nums.indexOf(nums[i], index + 1);
            }
        }
    }

    return console.log(response)
}

twoSum([2, 4, 5], 6);
twoSum([3, 8, 6], 6);


/*
    como pegar os indices de items repetido no array

*/
// var indices = [];
// var array = [2, 4, 3, 4, 2, 3, 2];

// var elemento = array[0];
// var idx = array.indexOf(elemento);
// while (idx != -1) {
//   indices.push(idx);
//   idx = array.indexOf(elemento, idx + 1);
// }
// console.log(indices);
// // [0, 2, 4]


