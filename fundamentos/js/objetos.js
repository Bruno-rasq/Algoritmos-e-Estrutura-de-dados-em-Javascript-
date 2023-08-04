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



// =====================  JSON ============================

// json = javascript object notation
// formato de representação de dades
// utiliza formato chave valor
// leve para ser enviado em requisição
// muito utilizado em API e tambem arquivos de configuração

// json é sempre com aspas duplas ""

const objs = [
    {
        nome: "Bruno",
        idade: 22,
        esta_estudando: true,
        hobbies: ["programar", "treinar", "filmes", "musicas"],
    
        detalhes_profissao: {
            profissao: "web-desenvolvedor",
            tempo_na_area: "8 meses"
        }
    },
    {
        nome: "heleno",
        idade: 22,
        esta_estudando: false,
        hobbies: ["jogar", "treinar"],
    
        detalhes_profissao: {
            profissao: "design grafico",
            tempo_na_area: "2 anos"
        }
    }
];

console.log(objs);

// obj para JSON 
const jsonDATA = JSON.stringify(objs);
console.log(jsonDATA);

// json para obj
const newObjs = JSON.parse(jsonDATA);
console.log(newObjs);

newObjs.forEach((user) => {
    console.log(user.nome);
});





// ===================== POO - javascript ====================

class person {
    constructor(name, age, sex){
        this.name = name,
        this.age = age,
        this.sex = sex
    }

    showperson(){
        return console.log(`Olá, meu nome é ${this.name} eu tenho ${this.age} anos de idade.`);
    }

    //estaticos
    static helloWorld(){
        console.log("hello World!");
    }
};

const johnDoe = new person("john Doe", 34, "male");
console.log(johnDoe);
johnDoe.showperson();

// acessando métodos estáticos
person.helloWorld();


// ===============================  [herança] ============================

class animal {
    constructor(name){
        this.name = name
    }

    MadeSomeNoise(){
        console.log(`${this.name} made some noise`);
    }
}

class rabbit extends animal{
    constructor(name){
        super(name)
    }

    MadeSomeNoise(){
        console.log(`Rabbit ${this.name} Made some squeak`);
    }
}

const osvald = new animal("Osvald");
osvald.MadeSomeNoise();

const Rabbit = new rabbit("Osvaldo");
Rabbit.MadeSomeNoise();