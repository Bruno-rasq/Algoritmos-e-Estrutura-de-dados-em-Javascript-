class Node{
    constructor(data, left = null, right = null){
        this.data = data
        this.left = left
        this.right = right
    }
};


class BST { //Binary Search Tree

    constructor(){
        this.root = null;
    };

    add(data){
        const node = new Node(data)

        if(this.root === null){
            this.root = node
        } else {

            const searchNode = function(current){
                if(data < current.data){

                    if(current.left === null){
                        current.left = node
                        return
                    } else {
                        return searchNode(current.left)
                    }

                } else if (data > current.data){

                    if(current.right === null){
                        current.right = node
                        return
                    } else {
                        return searchNode(current.right)
                    }
                } else {
                    return null
                }
            };

            return searchNode(this.root)
        }
    };

    search(data){
        const searchNode = function(current){
            if(current === null) return false
            if(data < current.data){
                return searchNode(current.left)
            }

            if(data > current.data){
                return searchNode(current.right)
            }

            return true;
        }

        return searchNode(this.root)
    };

    remove(data){

        const removeNode = function(current, data){

            if(current === null) return null

            if(data < current.data){
                current.left = removeNode(current.left, data)
            } else if(data > current.data){
                current.right = removeNode(current.right, data)

            } else {
                if(current.left === null && current.right === null) return null
                if(current.left === null) return current.right
                if(current.right === null) return current.left

                let replace = current.left;
                let replaceParent = current;

                while(replaceParent.right !== null){
                    replaceParent = replace
                    replace = replace.right
                }

                current.data = replaceParent.data
                current.left = removeNode(current.left, replaceParent.data)
            }

            return current;
        };

        this.root = removeNode(this.root, data)
    };

    toString(){
        return JSON.stringify(this.root)
    };

    InOrder(){
        if(this.root === null) return null;

        const nodeList = []
        const Traverse = function(current){
            if(current.left) Traverse(current.left)
            nodeList.push(current.data)
            if(current.right) Traverse(current.right)
        };

        Traverse(this.root);
        return nodeList;
    };

    PosOrder(){
        if(this.root === null) return null;

        const nodeList = []
        const Traverse = function(current){
            if(current.left) Traverse(current.left)
            if(current.right) Traverse(current.right)
            nodeList.push(current.data)
        };

        Traverse(this.root);
        return nodeList;
    };

    PreOrder(){
        if(this.root === null) return null;

        const nodeList = []
        const Traverse = function(current){
            nodeList.push(current.data)
            if(current.left) Traverse(current.left)
            if(current.right) Traverse(current.right)
        };

        Traverse(this.root);
        return nodeList;
    };
};

const Binary_tree = new BST()
Binary_tree.add(20)
Binary_tree.add(2)
Binary_tree.add(5)
Binary_tree.add(17)

console.log(Binary_tree.toString())
console.log(Binary_tree)

console.log(Binary_tree.search(2))
console.log(Binary_tree.search(17))
console.log(Binary_tree.search(3))
console.log(Binary_tree.search(30))


// Binary_tree.remove(20)
// Binary_tree.remove(5)
console.log(Binary_tree)
console.log(Binary_tree.InOrder())
console.log(Binary_tree.PreOrder())
console.log(Binary_tree.PosOrder())