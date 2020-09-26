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
    set(index,val){
        var foundVal =this.get(index);
        if(foundVal){
            foundVal.val=val
            return true
        }else{
            return false
        }
    }
    insert(index,val){
        var foundVal =this.get(index);
        if(foundVal){
            if(index ===0){
                this.Unshift(val)
                return true
            }
            if(index === this.length){
                return this.push(val)

            }

        }else{
            return false
        }
        this.length++;
    }
    insert1(index, val){
        if(index < 0 || index >this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val); //convert list to a boolean using !!

        var newNode =new Node(val);
        var prev =this.get(index-1)
        var temp =prev.next;
        prev.next =newNode
        newNode.next =temp;
        this.length++;
        return true;
    }
    remove(index, val){
        if(index < 0 || index >this.length) return false;
        if(index === this.length-1) return this.pop(val);
        if(index === 0) return this.shift(val);


        var prev =this.get(index-1)
        var following =this.get(index+1)
        prev.next =following

        // var previousNode =this.get(index -1)
        // var removed =previousNode.next;
        // previousNode.next=removed.next;

        this.length--;
        return true

    }
    reverse(){
        var node =this.head;
        this.head =this.tail;
        this.tail =node;

        var prev =null;
        var next;
        for(var i=0; i<this.length;i++){
            next =node.next;
            node.next =prev;
            prev = node;
            node =next;
        }
        return this;
    }

    print(){

        var arr =[];
        var current =this.head
        while(current){
            arr.push(current.val)
            current =current.next
        }
        console.log(arr)
    }





}

var list = new SinglyLinkedList();
console.log(list)
list.push(100)
list.push(201)
list.push(250)
list.push(350)
list.push(999)
console.log(list)

console.log('######################## traverse list #####################')
console.log(list.traverse())

console.log('######################## remove list #####################')
console.log(list.reverse())
console.log('######################## Traverse after remove #####################')
console.log(list.traverse())
