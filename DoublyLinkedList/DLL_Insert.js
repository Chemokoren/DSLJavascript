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
    unshift(val){
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
            this.head.prev =newNode;
            newNode.next =this.head;
            this.head =newNode;
        }
        this.length++;
        return this;
    }
    get(index){
        if(index < 0 || index >= this.length) return null;
        var count,current;
        if(index <= this.length/2){
            count =0;
            current =this.head;
            while(count != index){
                current =current.next;
                count++;

            }
            console.log("###############    first half   #####################")
        }else{
            count =this.length - 1;
            current =this.tail;
            while(count !== index){
                current =current.prev;
                count++;
            }
            console.log("###############    second half   #####################")
        }
        return current;

    }
    set(index,val){
        var foundVal =this.get(index);
        if(foundVal){
            foundVal.val=val
            return true
        }else{
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
    insert(index,val){
        if(index < 0 || index > this.length) return false;
        if(index === 0 ) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);

        var newNode =new Node(val);
        var beforeNode =this.get(index-1);
        var afterNode =beforeNode.next;

        beforeNode.next =newNode, newNode.prev =beforeNode;
        newNode.next =afterNode, afterNode.prev =newNode;
        this.length++;
        return true;
    }
}


list = new DoublyLinkedList();
list.push(99)
console.log(list)
list.push(100)
console.log(list)
list.push("Last ITEM")
list.push("200")
list.push("300")
list.push("400")
list.push("500")
list.push("600")
list.push("700")
list.push("800")
list.push("900")

console.log(list)

console.log("###############    INSERT   #####################")
console.log(list.insert(11,"PTOOH"))
// console.log(list.get())

console.log("############### traverse after INSERT #####################")
console.log(list)
