function Linked_list() {

    let tail = null;
    let head = null;
    let size = 0;


    class Node {
        constructor(data){
            this.data = data;
            this.next = null;
        }
    };

    class publisList {

        length(){
            return size;
        };

        push(value){

            if(!head){

                head = new Node(value);
                tail = head;
                size++
                return head;

            }

            let node = new Node(value);
            tail.next = node
            tail = node
            return node

        };

    };

    return new publisList()
};

let lista = Linked_list();


lista.push(1)
console.log(lista.length());