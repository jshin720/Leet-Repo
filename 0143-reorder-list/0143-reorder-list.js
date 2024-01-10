/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let slow = head;
    let fast = head.next;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        
    }
    console.log(slow)
    let secondHalf = slow.next;
    slow.next = null;
    let prev = null;
    
    while (secondHalf) {
        let temp = secondHalf.next;
        secondHalf.next = prev;
        prev = secondHalf;
        secondHalf = temp;
            
    } 

    console.log(prev, "2ndhalf")
    
    let firstHalf = head;
    secondHalf = prev;
    
    while (secondHalf) {
        let temp1 = firstHalf.next;
        let temp2 = secondHalf.next;
        
        firstHalf.next = secondHalf;
        secondHalf.next = temp1;
        firstHalf = temp1;
        secondHalf = temp2;
    }
};