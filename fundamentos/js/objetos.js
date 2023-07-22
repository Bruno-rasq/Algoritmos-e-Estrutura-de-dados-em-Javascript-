//  ============================ objetos ====================================

const user = {
    nome: "BRUNO",
    idade: 22,
    online: true,
    array: [2, 556, 4, 2],
    'favorite color': "violet"
};

console.log(user.nome);
console.log(user.online);
console.log(user.array[2]);
console.log(user['favorite color']);


// destructuring...
// [objeto]
const { nome, idade } = user;
console.log(idade);
console.log(nome);

// [array]
const Arry = [2, 5, 4, 3, 8, 50];
const [n1, n2] = Arry;
console.log(n1);
console.log(n2);


// JSON - javascript object notation
// objeto
const pet = {
    name: "Gertrudes",
    especie: "Pato"
}
console.log(pet);

const dogToJson = JSON.stringify(pet); // converte object para JSON 
console.log(dogToJson);

const obj = JSON.parse(dogToJson); // converte JSON em object literal
console.log(obj);

const JSONerrado = '{"nome":"burro", "idade": "22"}';
const obj2 = JSON.stringify(JSONerrado);
console.log(obj2);