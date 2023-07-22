// // ========================== classes ==========================

class pet {
    constructor(name, especie){
        this.name = name
        this.especie = especie
    }

    petsDetails(){
        return console.log(` ${this.name} está com fome`);
    }
};

const duck = new pet( "gertrudes", "pato" );
console.log(`nome do pet: ${duck.name}`);
console.log(`Espécie: ${duck.especie}`);

const coelho = new pet( "Osvaldo", "coelho" );
console.log(`nome do pet: ${coelho.name}`);
console.log(`Espécie: ${coelho.especie}`);

duck.petsDetails("gertrudes");


//herança
class superpets extends pet {
    constructor( name, especie, idade){
        super( name, especie)
        this.idade = idade
    }

    //static
    static digaOla(){
        console.log("Olá");
    };
};

const fred = new superpets("fred", "galo", "4 mese");
console.log(`nome: ${fred.name}`);
console.log(`idade: ${fred.idade}`);

superpets.digaOla();