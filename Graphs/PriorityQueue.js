class PriorityQueue{

    constructor(){
        this.values=[];
    }

    enqueue(val, priority){
        this.values.push({val,priority});
        this.sort();
    }

    dequeue(){
        return this.values.shift();
    }
    sort(){
        this.values.sort((a,b) => a.priority - b.priority)
    }
}

var q =new PriorityQueue();

q.enqueue("C", 5)
q.enqueue("Z", 19)
q.enqueue("A", 8)
q.enqueue("W", 2)

console.log(q)
q.dequeue()
q.dequeue()
q.enqueue("W", 1.2)
console.log(q)
