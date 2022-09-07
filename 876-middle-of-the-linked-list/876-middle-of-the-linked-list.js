/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    const len = lengthLinkedList(head)
    let mid, count = 0;
    
    if (len % 2 === 0 ) {
        mid = len / 2;
    } else {
        mid = Math.floor(len / 2);
    }
    
        
    let current = head;
    
    while(current !== null){
        if (count === mid) return current;

        count++;
        current = current.next;
    }
    
    return null;
};

const lengthLinkedList = (head) => {
    let count = 0;
    let current = head;
    
    while(current !== null) {
        count++;
        current = current.next;
    }
    return count;
}