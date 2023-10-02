function Queue(){

    let tail = null;
    let head = null;
    let size = 0;

    class Node{
        constructor(data){
            this.data = data;
            this.next = head;
        }
    };

    class publicQueue{

        size(){
            return size
        };

        Print() {
            console.log(head)
        };

        PrintAll(){

            if(head == null){
                return null
                
            } else {
                let arr = []
                let current = head

                for(let i = 0; i < size; i++){
                    arr[i] = current.data
                    current = current.next
                }
                return arr
            }
        };

        Enqueue(value){

            let node = new Node(value);

            if(head === null){
                tail = node
            }

            head = node
            size++

        };

        Dequeue(){
            if(size === 0){
                return;

            } else {

                let current = head;
                let prev = null;

                while(current.next){
                    prev = current
                    current = current.next
                }

                if( size > 1){
                    prev.next = null;
                    tail = prev
                } else {
                    head = null
                    tail = null
                }

                size--
            }
        };

        ValueIn(index){
            if(index > -1 && index < size){
                let current = head

                for(let i = 0; i < index; i++){
                    current = current.next
                }

                return current.data
            } else {
                return null
            }
        };

    };

    return new publicQueue();
};


//testando....

let fila = Queue();

fila.Enqueue(1)
fila.Enqueue(2)
fila.Enqueue(3)
fila.Enqueue(4)

console.log(fila.Print())
console.log(fila.PrintAll())

fila.Dequeue();
console.log(fila.PrintAll())