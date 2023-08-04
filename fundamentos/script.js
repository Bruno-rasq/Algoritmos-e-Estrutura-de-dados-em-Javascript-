console.log("Hello World");

// console
console.log("Console.log");
console.error("console.error");
console.warn("console.warn");

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