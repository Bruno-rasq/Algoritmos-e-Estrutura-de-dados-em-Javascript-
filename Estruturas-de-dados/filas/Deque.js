function Deque(){

    let tail = null;
    let head = null;
    let size = 0;

    class Node{
        constructor(data){
            this.data = data;
            this.next = null;
        }
    }

    class publicDeque{

        gethead(){
            return head.data
        };

        getTail(){
            return tail.data
        };

        size(){
            return size
        };

        Print(){
            if(head != null){

                let arr = [];
                let current = head;

                for(let i = 0; i < size; i++){
                    arr[i] = current.data;
                    current = current.next;
                }

                return arr
            } else {
                return null;
            }
        };

        PrintReverse(){

            if(head != null){
                let arr = this.Print()
                return arr.reverse()
            } else {
                return null;
            }
        };

        unshift(value){

            let node = new Node(value);
            node.next = head
            head = node

            if(!tail){
                tail = head
            }

            size++
        };

        push(value){

            let node = new Node(value)

            if(!head){
                head = node
            } else {
                tail.next = node
            }

            tail = node
            size++
        };

        shift(){
            if(head){
                if(size === 1){
                    head = null
                    tail = null
                } else {
                    head = head.next
                }
                size--
            }
        };

        pop(){
            if(head){
                if(size === 1){
                    head = null
                    tail === null
                } else {
                    let current = head

                    while(current.next.next){
                        current = current.next
                    }

                    tail = current
                    tail.next = null
                }
                size--
            }
        };

    };

    return new publicDeque();
};


// testando....

let deque = Deque();

deque.unshift(1)
deque.unshift(2)
deque.unshift(3)

console.log(deque.Print())

deque.push('A')
deque.push('B')
deque.push('C')

console.log(deque.Print())

deque.pop()
deque.shift()

console.log(deque.Print())
console.log(deque.PrintReverse())