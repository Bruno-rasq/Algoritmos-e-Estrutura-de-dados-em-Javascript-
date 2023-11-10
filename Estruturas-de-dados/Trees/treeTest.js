class Node {
    constructor(key, data, parent = null){
        this.key = key
        this.data = data
        this.parent = parent
        this.children = []
    }
};

const newNode = new Node(1, 'a')
console.log(newNode)