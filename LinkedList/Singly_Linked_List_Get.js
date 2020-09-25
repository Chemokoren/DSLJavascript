class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    traverse() {
        var current = this.head;
        while (current) {
            console.log(current.val)
            current = current.next;
        }
    }

    pop() {
        if (!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        // console.log('current: '+current.val)
        // console.log('new tail: '+newTail.val)
        this.tail = newTail
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return this.tail;
    }

    shift() {
        if (!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return currentHead;
    }

    Unshift(val) {
        var newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        // else{
        //     var currentNext =this.head;
        //     this.head =newNode
        //     this.head.next=currentNext
        // }
        this.length++;
        return this;
    }
    get(val){
        if(val < 0 || val >=list.length) return undefined;
        var counter =0;
        var current =this.head;
        while(counter !==val){
            current =current.next;
            counter++;
        }
        return current;

    }
}

var list = new SinglyLinkedList();
console.log(list)
list.push("HELLO")
console.log(list)
list.push("how")
console.log(list)
list.push("are")
console.log(list)
list.push("you")
console.log(list)

console.log('######################## traverse list #####################')
console.log(list.traverse())

console.log('######################## get list #####################')
console.log(list.get(4))
console.log('######################## Traverse after get #####################')
console.log(list.traverse())
