function Node(data, next){
    this.data = data;
    this.next = next;
}

let node1 = new Node("data 1", null);
let node2 = new Node("data 2", node1);
let node3 = new Node("data 3", node2);
let node4 = new Node("data 4", node3);
let node5 = new Node("data 5", node4);
let node6 = new Node("data 6", node5);

let head = node6;
let fastPointer = head;
let slowPointer = head;

while(fastPointer.next !== null && fastPointer.next.next !== null){
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer.next;
}

console.log(slowPointer.data);



