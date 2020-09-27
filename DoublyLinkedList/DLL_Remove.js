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

    shift() {
        if (!this.head) return undefined;

        var shiftedNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = shiftedNode.next;
            this.head.prev = null;
            shiftedNode.next = null;
        }
        this.length--;
        return shiftedNode;

    }

    unshift(val) {
        var newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // var temp = this.head;
            // newNode.next = temp;
            // newNode.prev=null;
            // this.head = newNode;

            //option 2
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        var count, current;
        if (index <= this.length / 2) {
            count = 0;
            current = this.head;
            while (count != index) {
                current = current.next;
                count++;

            }
            console.log("###############    first half   #####################")
        } else {
            count = this.length - 1;
            current = this.tail;
            while (count !== index) {
                current = current.prev;
                count++;
            }
            console.log("###############    second half   #####################")
        }
        return current;

    }

    set(index, val) {
        var foundVal = this.get(index);
        if (foundVal) {
            foundVal.val = val
            return true
        } else {
            return false
        }
    }

    // insert(index, val){
    //     if(index < 0 || index >this.length) return false;
    //     if(index === this.length) return !!this.push(val);
    //     if(index === 0) return !!this.unshift(val); //convert list to a boolean using !!
    //
    //     var newNode =new Node(val);
    //     var prev =this.get(index-1)
    //     var temp =prev.next;
    //     prev.next =newNode
    //     newNode.next =temp;
    //     this.length++;
    //     return true;
    // }
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);

        var newNode = new Node(val);
        var beforeNode = this.get(index - 1);
        var afterNode = beforeNode.next;

        beforeNode.next = newNode, newNode.prev = beforeNode;
        newNode.next = afterNode, afterNode.prev = newNode;
        this.length++;
        return true;
    }

    // remove(index){
    //     if(index < 0 || index >=this.length) return false;
    //     if(index === this.length-1) return this.pop();
    //     if(index === 0) return this.shift();
    //
    //
    //     var prev =this.get(index-1)
    //     var following =this.get(index+1)
    //     prev.next =following
    //     following.prev =prev
    //
    //     // var previousNode =this.get(index -1)
    //     // var removed =previousNode.next;
    //     // previousNode.next=removed.next;
    //
    //     this.length--;
    //     return true
    //
    // }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        var removedNode = this.get(index);
        var beforeNode =removedNode.prev;
        var afterNode =removedNode.next;
        beforeNode.next=afterNode;
        afterNode.prev=beforeNode;

        // removedNode.prev.next = removedNode.next;
        // removedNode.next.prev = removedNode.prev;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;

    }
}


list = new DoublyLinkedList();

list.push("100")
list.push("200")
list.push("300")
list.push("400")
list.push("500")
list.push("600")
list.push("700")
list.push("800")
list.push("900")

console.log(list)

console.log("###############    REMOVE   #####################")
console.log(list.remove(5))

console.log("############### traverse after REMOVE #####################")
console.log(list)
