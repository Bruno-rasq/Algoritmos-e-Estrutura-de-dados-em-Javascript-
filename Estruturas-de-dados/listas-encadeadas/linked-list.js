// implementando uma lista encadeade.

function linkedList(){

    let head = null; // ponto inicial
    let length = 0; // tamanho 

    // cada node possue um valor e um pronteiro indicando o proximo
    const Node = (value) => {
        return {
            value,
            next: null
        }
    };

    // funçã para adicionar um novo nó
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
    }

    // public
    return {

        length: () => length, //retorna o tamanho da lista
        add: (value) => add(value), //adiciona um novo nó
        print: () => console.log(head), //imprime o head da lista
        getByIndex: (index) => getByIndex(index), // pega um valor pelo indice
        getByValue: (value) => getByValue(value),

    };

};

const list = linkedList();

list.add(1);
list.add(2);
list.add(3);

console.log(list.length());
// list.print();

console.log(list.getByIndex(0));
console.log(list.getByIndex(1));
console.log(list.getByIndex(2));
console.log(list.getByIndex(3));

console.log(list.getByValue(2));
console.log(list.getByValue(5));