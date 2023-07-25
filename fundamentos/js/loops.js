//estruturas de loop/repetições
const mylist = [,2 ,3 ,5 ,74];
let contador = 0;

while(contador < mylist.length){

    console.log("imprimindo: " + mylist[contador]);

    // contador = contador + 1;
    contador ++
};


const listaDois = ["a", "b", "c", "d", "E"];

for (let index = 0; index < listaDois.length; index++) {
    // const element = array[index];

    // console.log(listaDois[index]);
    console.log(`imprimindo: ${listaDois[index]}`); // template literals
    
};




//metodos de array - repetições

const names = ["bruno", "heleno", "julio", "clara"];

//[forEach]
names.forEach(function(name) {
    console.log(` o nome é: ${name}`);
});

//[Map]
const modificarNames = names.map(function(name){
    if(name === "bruno"){
        return name = 'mrs bruno';
    } else {
        return name
    };
});

console.log(modificarNames);

//[filter]
const number = [2, 5, 4, -3, 8, -9, -1];

const NegativeNumber= number.filter(function(numbers){
   return numbers < 0;
});

console.log(NegativeNumber);

//[reduce]
const soma = NegativeNumber.reduce(function(total, number){
    return total + number;
});

console.log(soma);



//exercicio de treino
//criar uma função que receba um array com valores positivos e negativos
//filtre os valores negativos e some os valores positivos

let array = [5, 10, 1, -5, -2];

function Positivos(arry){

    let newArray = arry.filter((numbers) => {
       return numbers > 0;
    });

    console.log(newArray);
    
    let total = newArray.reduce((total, valor) => total + valor);

    console.log(total);
};

Positivos(array);