const queue = () => {
    const data = []

    const add = (value) => {
        data.unshift(value)
    };

    const remove = () => {
        if(data.length === 0){
            return -1;
        }
        
        const value = data[data.length - 1];
        data.splice(data.length-1, 1)
        return value
    }

    const print = () => {
        console.log(data)
    }

    return {
        add,
        remove,
        print
    }
}

const newQueue = queue()
newQueue.add(1);
newQueue.add(2);
newQueue.add(3);
newQueue.add(4);

newQueue.print()
newQueue.remove()
newQueue.print()