function DoubleLinkedList() {

    let tail = null;
    let head = null;
    let size = 0;

    class Node {
        constructor(data) {
            this.data = data;
            this.next = null;
            this.previous = null;
        }
    };

    class publicList{

        getHead(){
            if(head){
                return head.data;
            }
            return null;
        };

        getTail(){
            if(tail){
                return tail.data;
            }
            return null;
        };

        length() {
            return size;
        };
        

        // mostrar a lista
        print() {
            console.log(head)
        };

        printALL(){
            if(head){
                let arr = [];
                let current = head;
                for(let i = 0; i < size; i++){
                    arr[i] = current.data;
                    current = current.next
                }
                return console.log(arr)
            } else {
                return null
            }
        };

        printALLReverse(){
            if(head){
                let arr = [];
                let current = tail;
                for(let i = 0; i < size; i++){
                    arr[i] = current.data;
                    current = current.previous
                }
                return console.log(arr)
            } else {
                return null
            }
        };

        //adicionar elementos a lista

        unshift(value){
            let node = new Node(value)
            node.next = head
            head = node

            if(size === 0){
                tail = head
            } else {
                head.next.previous = head
            }
            size++
        };

        push(value){
            let node = new Node(value)
            node.previous = tail

            if(size === 0){
                head = node
            } else {
                tail.next = node
            }
            tail = node
            size++
        }
    };

    return new publicList()
};

let Test = DoubleLinkedList();

Test.push(1)
Test.push(2)
Test.push(3)
Test.push(4)

Test.printALL();
Test.printALLReverse();

Test.unshift(8);
Test.push('B');

Test.printALL();

