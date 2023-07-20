// Alguns métodos utilizados com arrays



// ============= REVERSE ==============

const data = [
    {nome: "bruno", idade: 22},
    {nome: "joao", idade: 12},
    {nome: "heleno", idade: 22222},
    {nome: "mario", idade: 60},
    {nome: "rodolfo", idade: 22},
    {nome: "bruna", idade: 19}
];

let ReverseData = data.reverse();
console.log(ReverseData); // simplesmente inverte a ordem dos itens 

console.log("=======================")

// ============= FIND ================

// metodo utilizado para encontra algo em um array
// necessita de alguma lógica que auxilie na procura
let idadeEstimada = 100;

let MaiorIdade = data.find((users) => {
    users.idade >= idadeEstimada;
});

console.log(MaiorIdade);