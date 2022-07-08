/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
    let q1 = [original];
    let q2 = [cloned];
    
    while(q1.length > 0) {
        let n1 = q1.shift();
        let n2 = q2.shift();
        
        if (n1.val === n2.val && n2.val === target.val) {
            return n2
        }
        if (n1.left) q1.push(n1.left);
        if (n1.right) q1.push(n1.right);
        if (n2.left) q2.push(n2.left);
        if (n2.right) q2.push(n2.right);
    }
    
};