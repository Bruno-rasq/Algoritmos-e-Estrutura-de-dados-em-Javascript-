// ================ THIS ====================

//fora do escopo local o THIS sempre se refere ao objeto global window
// em objeto o THIS vai se referir a instancia e pode acessar suas propriedades

// var teste = 5;

// console.log(this.teste);

const pessoa = {
    //propriedades chave / valor
    name: "bruno",
    idade: 22,

    //métodos 
    falar: function(){
        console.log("Olá")
    },

    DizerNome: function(){
        console.log("o meu nome é " + this.name)
    },

    aniversario: function(){
        this.idade += 1;
    },

    saudacao: function(){
        return 'Salve, ' + this.name;
    }
};

pessoa.DizerNome();

console.log(pessoa.idade);

pessoa.aniversario();

console.log(pessoa.idade);

console.log(pessoa.saudacao());