// 1. Define what a "Node" looks like
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

// 2. Build the list: 0 -> 1 -> 2 -> 3
const head = new ListNode(0, new ListNode(1, new ListNode(2, new ListNode(3))));

// 3. Now run your function
const reversedHead = reverseList(head);

// 4. Helper to see the result (since you can't just log a list like an array)
let current = reversedHead;
let result = [];
while (current) {
    result.push(current.val);
    current = current.next;
}
console.log(result); // Output: [3, 2, 1, 0]

function reverseList(head) {
    let prev = null;
    let curr = head;

    while (curr !== null) {
        let nextTemp = curr.next; // Save the next node
        curr.next = prev;         // Reverse the pointer
        prev = curr;              // Move prev forward
        curr = nextTemp;          // Move curr forward
    }
    return prev; 
};