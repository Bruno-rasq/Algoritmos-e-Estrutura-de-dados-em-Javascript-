function Stacks(){

    let top = null;
    let size = 0;

    class Node {
        constructor(data){
            this.data = data
            this.next = null
        }
    }

    class publicStack{

        size(){
            return size;
        };

        print(){
            if(top === null){
                return null
            } else {
                return top.data
            }
        };

        push(value){

            let node = new Node(value)

            node.next = top;
            top = node;
            size++
        };

        pop(){

            if(top === null){
                return null;

            } else {
                let remove = top;
                top = top.next;

                if(size > 0){
                    size--
                }

                return remove.data

            }
        };

        PrintAll(){
            if(top === null){
                return null;

            } else {
                let arr = [];
                let current = top;

                for(let i = 0; i < size; i++){
                    arr[i] = current.data;
                    current =current.next;
                }
                return arr
            }

        };

    };

    return new publicStack()
};


// testando....

let pilha = Stacks();

pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.push(4);
pilha.push(5);

console.log(pilha.PrintAll(), pilha.size());

pilha.pop();

console.log(pilha.PrintAll());

pilha.pop();
pilha.pop();
pilha.pop();

console.log(pilha.PrintAll());