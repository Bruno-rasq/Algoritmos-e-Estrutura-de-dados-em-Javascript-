const tree = {
    value: 10,
    left: {},
    right: {}
}

function Insert(tree, value){
    if(tree.value){
        if(value > tree.value){
            Insert(tree.right, value)
        } else {
            Insert(tree.left, value)
        }
    } else {
        tree.value = value
        tree.left = {}
        tree.right = {}
    }
}

Insert(tree, 11)
Insert(tree, 3)
Insert(tree, 20)
Insert(tree, 15)

function PreOrder(tree){
    console.log(tree.value)
    tree.left && PreOrder(tree.left)
    tree.right && PreOrder(tree.right)
}
function InOrder(tree){
    tree.left && InOrder(tree.left)
    console.log(tree.value)
    tree.right && InOrder(tree.right)
}
function PosOrder(tree){
    tree.left && PosOrder(tree.left)
    tree.right && PosOrder(tree.right)
    console.log(tree.value)
}

console.log("Pre Order")
PreOrder(tree)
console.log("In Order")
InOrder(tree)
console.log("Pos Order")
PosOrder(tree)