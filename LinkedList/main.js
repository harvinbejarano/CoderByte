//find middle data
(function () {
    function Node(data, next) {
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
    
    while (fastPointer.next !== null && fastPointer.next.next !== null) {
        fastPointer = fastPointer.next.next;
        slowPointer = slowPointer.next;
    }
    
console.log("Middle: "+ slowPointer.data);
})();

//Pre-Order (Tree traversal)
(function () {
    
    function Node(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    let root = new Node('A');
    let n1 = new Node('B');
    let n2 = new Node('C');
    let n3 = new Node('D');
    let n4 = new Node('E');

    root.left = n1;
    root.right = n2;
    n1.left = n3;
    n1.right = n4;

    //Pre-Order Steps:
   // 1) Return the root node value.
   //2) Traverse the left subtree by recursively calling the pre-order function.
   //3) Traverse the right subtree by recursively calling the pre-order function.
   //Output: A, B, D, E, C
    
    function preOrder(root, nodes) {
        nodes.push(root.data);
        if (root && root.left) {
            preOrder(root.left, nodes);
        }
        if (root && root.right) {
            preOrder(root.right, nodes);
        }
        return nodes;
    }

    const result = preOrder(root, []);
    console.log("preOrder: " + result);

})();



