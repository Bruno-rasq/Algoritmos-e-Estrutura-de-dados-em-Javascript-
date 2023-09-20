// implementando uma lista encadeade.

function linkedList(){

    let tail = null;
    let head = null; // ponto inicial
    let length = 0; // tamanho 

    // cada node possue um valor e um pronteiro indicando o proximo
    const Node = (value) => {
        return {
            value,
            next: null
        }
    };

    // o(n)
    const add = (value) => {

        if(!head){
            head = Node(value);
            length++
            return head
        }

        let node = head
        while(node.next){
            node = node.next
        }
        node.next = Node(value)
        length++
        return node.next

    };

    // o(1)
    const add2 = (value) => {

        if(!head){
            head = Node(value);
            tail = head
            length++
            return head
        }

        let node = Node(value)
        tail.next = node
        tail = node
        return node
    };

    const getByIndex = (index) => {

        if( length === 0 || index >= length ){
            return null
        };

        let node = head
        let count = 0
        while (count < index && node.next){
            node = node.next
            count++
        }

        return node
    };

    const getByValue = (value) => {

        if ( length == 0 ){
            return null
        }

        let node = head
        if(node.value == value){
            return node
        }

        while(node.next){
            node = node.next
            if(node.value === value){
                return node
            }
        }

        return null
    };

    const remove = (node) => {

        // lista vazia
        if(length == 0){
            return false
        }

        // removendo o primeiro item
        if(node === head){
            head = node.next
            return true
        }

        // removendo demais ..
        let currentNode = head
        while(currentNode.next && currentNode.next != node){
            currentNode = currentNode.next
        }

        currentNode.next = node.next
        return true
        
    };

    // public
    return {

        length: () => length, //retorna o tamanho da lista
        add: (value) => add(value), //adiciona um novo nó
        add2: (value) => add2(value),
        print: () => console.log(head), //imprime o head da lista
        getByIndex: (index) => getByIndex(index), // pega um valor pelo indice
        getByValue: (value) => getByValue(value), // pega um valor pelo proprio valor
        remove: (node) => remove(node),

    };

};

const list = linkedList();

list.add2(1);
list.add2(2);
list.add2(3);
list.add2(4);

// list.print();

let node = list.getByValue(3);
list.remove(node)
list.print();

// console.log(list.length());
// // list.print();

// console.log(list.getByIndex(0));
// console.log(list.getByIndex(1));
// console.log(list.getByIndex(2));
// console.log(list.getByIndex(3));

// console.log(list.getByValue(2));
// console.log(list.getByValue(5));