class circularQueue {

    constructor(capacity){
        this.items = new Array(capacity)
        this.capacity = capacity
        this.currentLength = 0
        this.hear = -1
        this.front = -1
    };

    isFull(){
        return this.currentLength === this.capacity
    };

    isEmpty(){
        return this.currentLength === 0
    };

    OnQueue(element){
        if(!this.isFull()){
            this.hear = (this.hear + 1) % this.capacity;
            this.items[this.hear] = element
            this.currentLength++
            if(this.front === -1){
                this.front = this.hear
            }
        }
    };

    DeQueue(){
        if(this.isEmpty()){
            return null
        }

        const item = this.items[this.front]
        this.items[this.front] = null
        this.front = (this.front + 1) % this.capacity
        this.currentLength--

        if(this.isEmpty()){
            this.front = -1
            this.hear = -1
        }
        return item
    };

    peek(){
        if(!this.isEmpty()){
            return this.items[this.front]
        }
        return null
    };

    print(){
        if(this.isEmpty()){
            return null

        } else {
            let i
            let str = ''

            for(i = this.front; i !== this.hear; i = (i + 1) % this.capacity){
                str += this.items[i] + ' '
            }
            str += this.items[i]
            console.log(str)
        }
    };

};


let circleQueue = new circularQueue(5)

console.log(circleQueue.isEmpty());

circleQueue.OnQueue(22)
circleQueue.OnQueue(11)
circleQueue.OnQueue(33)
circleQueue.OnQueue(44)
circleQueue.OnQueue(52)

console.log(circleQueue.isFull())
console.log(circleQueue.isEmpty());

circleQueue.print()

circleQueue.DeQueue()

circleQueue.print()