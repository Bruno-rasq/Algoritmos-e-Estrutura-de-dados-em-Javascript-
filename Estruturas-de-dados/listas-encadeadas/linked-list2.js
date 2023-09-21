function Linked_list() {

    let tail = null;
    let head = null;
    let size = 0;


    class Node {
        constructor(data) {
            this.data = data;
            this.next = null;
        }
    };

    class publisList {

        print() {
            console.log(head)
        };

        length() {
            return size;
        };

        isEmpty() {
            return size == 0 ? true : false
        };

        clear() {

            if (size === 0) {
                return null
            }

            head = null
            tail = null
            size = 0

            return
        };

        push(value) {

            if (!head) {

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

        pop() {

            if (size == 0 || head == null || head.next == null) {
                throw console.error('this list is empty');
            };

            // HEAD >> NODE >> NODE >> TAIL
            // HEAD >> NODE >> TAIL >> NODE
            // HEAD >> NODE >> TAIL

            let second_last = head;
            while (second_last.next != tail) {
                second_last = second_last.next
            }

            tail = second_last
            second_last.next = null
            size--
            return head;

        };

        peek() {
            return tail
        };

        getByIndex(index) {

            if (size == 0 || index >= size) {
                return null
            };

            let node = head
            let count = 0;

            while (count < index && node.next) {
                node = node.next
                count++
            }

            return node
        };

        getByValue(value) {

            if (size == 0) {
                return null
            }

            let node = head
            if (node.data == value) {
                return node
            }

            while (node.next) {
                node = node.next
                if (node.data === value) {
                    return node
                }
            }

            return null
        };

        remove(node) {

            if (size === 0) {
                return null
            }

            if (node == head) {
                head = node.next
                size--
                return true
            }

            let currentNode = head
            while (currentNode.next && currentNode.next != node) {
                currentNode = currentNode.next
            }

            currentNode.next = node.next
            size--
            return true

        }


    };

    return new publisList()
};


//[ testando so Métodos ]:

let lista = Linked_list(); // criação da linked-list

//inserindo dados
lista.push(1)
lista.push(2)
lista.push(5)
lista.push(10)
lista.push(3)

// printando a lista
lista.print();

//verificando tamanho da lista
console.log(lista.length());



// removendo ultimo node da lista
lista.pop();
lista.print();
console.log(lista.length());
/**
 
    ENCONTREI UM BUG
       - metodo pop() remove o ultimo elemento até se printando a lista primeiro e depois removido

       exm: 
       lista.push('A')
       lista.push('B')
       lista.push('C')
       lista.print()

       A >> B  OBS: não deveria printar assim.. correto seria: A >> B >> C

       lista.pop()
       lista.print()

       A >> B

 */

// ultimo node
console.log(`Ultimo node: ${JSON.stringify(lista.peek())}`);


// buscando pelo indice
let Node = lista.getByIndex(2)
console.log(Node);

//buscando pelo valor
let Value = lista.getByValue(10)
if(Value != null){
    console.log(`Este valor está na lista: ${JSON.stringify(Value)}`)
} else {
    console.log('Valor não encontrado')
}

// limpando a lista
lista.clear()
console.log(lista.length())