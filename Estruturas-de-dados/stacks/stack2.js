function Stack(){

    let top = null;
    let size = 0;

    class Node{
        constructor(data){
            this.data = data;
            this.previous = null;
        }
    };

    class publicStack{

        size(){
            return size
        };

        print(){
            if(top === null){
                return null

            } else {
                let arr = []
                let current = top

                for(let i = 0; i < size; i++){
                    arr[i] = current.data
                    current = current.previous
                }

                return arr
            }
        };

        push(data){

            let node = new Node(data);
            node.previous = top
            top = node
            size++
        };

        pop(){

            if(top === null){
                return null

            } else {
                let remover = top;
                top = top.previous

                if(size > 0){
                    size--
                }
                return remover.data

            }
        };

    };

    return new publicStack();
};


// testando...

let pilha = Stack();

pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.push(4);

console.log(pilha.print());

pilha.pop();

console.log(pilha.print());