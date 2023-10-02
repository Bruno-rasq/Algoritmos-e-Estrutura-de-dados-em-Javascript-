class Pilha {
    constructor(){
        this.itens = [];
    }

    //metodos
    push(element){
        this.itens.push(element);
    }

    pop(){
        return this.itens.pop();
    }

    peek(){
        let top = this.itens[this.itens.length - 1]
        return console.log(top)
    }

    isEmpty(){
        let empty = this.itens.length === 0
        return console.log(empty)
    }

    clear(){
        this.itens = []
    }

    listar(){
        return console.log( this.itens )
    }

}

let names = new Pilha();

names.push('bruno');
names.push('heleno');
names.push('carol');

// names.pop();
// names.isEmpty();
// names.peek();
// names.clear();
names.listar();