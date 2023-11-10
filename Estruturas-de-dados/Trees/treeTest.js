class Node {
    constructor(key, data, parent = null){
        this.key = key
        this.data = data
        this.parent = parent
        this.children = []
    }
};

class Tree {
    constructor(){
        this.root = null
    }

    add(key, data, parentKey){

        const newNode = new Node(key, data, parentKey)

        if(!this.root){
            this.root = newNode

        } else {

            try{
                const TargetParent = this.find(parentKey)
                newNode.parent = TargetParent

                TargetParent.children.push(newNode)

            } catch(err){
                console.error(`Error on add() method: Node with given parentKey: ${parentKey} is not found in the tree.`)
            }
        }
    };

    remove(targetKey){

        if(!this.root) throw new erro("tree is empty");

        let targetNode;
        if(targetKey === this.root.key){
            targetNode = this.root
            this.root = null
            return targetNode

        } else {

            try{
                targetNode = this.find(targetKey);
                
                const parent = targetNode.parent
                const updateChildren = []

                for(let i = 0; i < parent.children.length; i++){
                    if(targetKey !== parent.children[i].key){
                        updateChildren.push(parent.children[i])
                    }
                }

                parent.children = updateChildren
                return targetNode

            } catch(err){
                console.error(`Error on remove() method: Nodw with given targetKey: ${targetKey} is not found in the tree.`)
            }
        }
    };

    find(targetKey){
       
        if(!this.root) throw new erro("tree is empty");

        if(targetKey === this.root.key){
            return this.root
        } else {
            return this.DFS(targetKey, this.root)
        }
    };

    DFS(targetKey, node = this.root){ // Depth First Search

        // se não houver nó raiz então não há arvore
        if(!node) throw new error('Tree is empty');

        let targetNode = false;
        let found = false

        function RecursiveDepthTraverse(currentNode){

            for(let i = 0; i < currentNode.children.length; i++){

                if(currentNode.children[i].key === targetKey){
                    found = true
                    targetNode = currentNode.children[i]
                    break;

                } else {

                    RecursiveDepthTraverse(currentNode.children[i])
                    if(found) break;
                }
            }
        }

        RecursiveDepthTraverse(node)
        if(!targetNode) {
            throw new Error(`On depthFirstTraverse(): target node with given key: ${targetKey} is not found in the tree.`)
        } else {
            return targetNode
        }
    };

    printTreeAsString(){

        if(!this.root) throw new erro("tree is empty");

        const getTreeString = (node = this.root, spaceCount = 0) => {
            let treeString = '\n';

            node.children.forEach(child => {
                treeString += `${ " ".repeat(spaceCount)} * node key: ${child.key}`
            });

            return treeString
        };

        return console.log(`\n * node key: ${this.root.key} ${getTreeString(this.root, 4)}`)
    };
};


// PlayGround:

const tree = new Tree();

const N = [
    {
        id: 1,
        parentId: null,
        data: { name: 1 }
    },
    {
        id: 3,
        parentId: 1,
        data: { name: 3 }
    },
    {
        id: 2,
        parentId: 1,
        data: { name: 2 }
    },
    {
        id: 4,
        parentId: 1,
        data: { name: 4 }
    },
    {
        id: 6,
        parentId: 3,
        data: { name: 6 }
    },
    {
        id: 5,
        parentId: 3,
        data: { name: 5 }
    }
];

N.forEach(num => tree.add(num.id, num.data, num.parentId))

// tree.printTreeAsString()
console.log(tree)