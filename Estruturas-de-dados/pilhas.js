function Stack(){

    let top = null; // e se inicialmente o tamanho é 0 então não existe item no top
    let size = 0;  //inicialmente não possue itens, por isso o tamanho da pilha é 0

    class node {
        // cria cada item da pilha e faz a referencia para o item anterior
        constructor(data){
            this.data = data
            this.previous = null
        }
    }

    class publicStack{
        // armazenando todos os metodos publicos acessiveis fora da classe
        size(){
            return size
        }

        isEmpty(){
            return this.size() === 0
        }

        push(data){
            const node = new node(data)
            node.previous = top

            top = node
            size++
        }

        pop(){
            if(this.isEmpty()){
                throw new console.error('This stack is empty');
            }

           const TopCurrent = Object.assign({}, top) // cria uma copia do item do topo
           const nextElement = TopCurrent.previous // faz a referencia ao item anterior

           top = nextElement
           size--

           return TopCurrent.data
        }

        peek(){
            if(this.isEmpty()){
                throw new console.error('This stack is empty');
            }

            return top.data
        }

        clear(){
            top = null
            size = 0
        }

    }

    return new publicStack()
};








// ==== CLASSE =======

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

export { Pilha }

