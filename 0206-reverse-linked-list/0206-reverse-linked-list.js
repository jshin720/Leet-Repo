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
// var reverseList = function(head) {
//     let prev = null;
//     let current = head;
    
//     while (current !== null) {
//         const next = current.next;
//         current.next = prev;
//         prev = current;
//         current = next;
        
//     }
    
//     return prev;
// };

var reverseList = function(head, prev=null) {
    if (head === null) return prev;
    
    let next = head.next;
    head.next = prev;
    
    return reverseList(next, head)
};