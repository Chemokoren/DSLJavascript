class Node{
    constructor(val){
        this.val =val;
        this.next =null;
    }
}
class SinglyLinkedList{
    constructor(){
        this.head =null;
        this.tail =null;
        this.length =0;
    }
    push(val){
        var newNode =new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail =this.head;
        }else{
            this.tail.next=newNode;
            this.tail =newNode;
        }
        this.length++;
        return this;
    }
}

var list =new SinglyLinkedList();
console.log(list)
list.push("HELLO")
console.log(list)
list.push("how")
console.log(list)
list.push("are")
console.log(list)
list.push("you")
console.log(list)
