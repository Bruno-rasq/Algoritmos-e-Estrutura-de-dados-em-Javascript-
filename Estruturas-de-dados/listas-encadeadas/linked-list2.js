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

        print(){
            console.log(head)
        };

        length(){
            return size;
        };

        isEmpty(){
            return size == 0 ? true : false
        };

        clear(){

            if(size === 0){
                return null
            }
    
            head = null
            tail = null
            size = 0
    
            return 
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
            size++
            return node

        };

        pop(){

            if(size == 0){
                throw console.error('this list is empty');
            };

            // HEAD >> NODE >> NODE >> TAIL
            // HEAD >> NODE >> TAIL >> NODE
            // HEAD >> NODE >> TAIL

           
        };


    };

    return new publisList()
};


let lista = Linked_list();

lista.push(1)
lista.push(2)
lista.push(3)
lista.push(4)

lista.print();
console.log(lista.length());
console.log(lista.isEmpty());

// lista.clear();
// lista.print();
