class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        var newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;

        var poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            // poppedNode.prev=null;
        }
        this.length--;
        // console.log("###############test not setting prev of popposed value not null#####################")
        // console.log(poppedNode.prev)
        // console.log(poppedNode.prev.prev)
        // console.log("############### END #####################")
        return poppedNode;

    }
    shift(){
        if (!this.head) return undefined;

        var shiftedNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else{
            this.head =shiftedNode.next;
            this.head.prev=null;
            shiftedNode.next=null;
        }
        this.length--;
        return shiftedNode;

    }
}


list = new DoublyLinkedList();
list.push(99)
console.log(list)
list.push(100)
console.log(list)
list.push("Last ITEM")
console.log(list)
console.log("######################################################")
console.log(list.shift())
console.log("###############traverse after pop#####################")
console.log(list)
