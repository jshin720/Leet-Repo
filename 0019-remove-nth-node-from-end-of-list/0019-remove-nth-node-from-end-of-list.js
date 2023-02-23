/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummyNode = new ListNode();
    dummyNode.next = head;
    let fastP = head;
    let slowP = dummyNode;
    
    while(n > 0) {
        fastP = fastP.next;
        n--;
    }
    
    while(fastP !== null) {
        fastP = fastP.next;
        slowP = slowP.next;
    }
    
    slowP.next = slowP.next.next;
    
    return dummyNode.next;
};