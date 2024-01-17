/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
   
    const listMapped = new Map();
    let curr = head;
    
    while (curr) {
        const copied = new Node(curr.val);
        listMapped.set(curr, copied);
        curr = curr.next;
        
    }
     curr = head;
    
    while(curr) {
        const copied = listMapped.get(curr);
        copied.next = listMapped.get(curr.next) || null;
        copied.random = listMapped.get(curr.random) || null;
        curr = curr.next;
    }
    
    return listMapped.get(head);
};