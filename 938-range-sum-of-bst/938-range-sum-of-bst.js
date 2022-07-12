/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let rangeSum = [root];
    let sum = 0;
    
    while (rangeSum.length > 0) {
        let node = rangeSum.pop();
        
        if (node.val >= low && node.val <= high) {
            sum += node.val
        }
        node.left && rangeSum.push(node.left);
        node.right && rangeSum.push(node.right);
    }
    return sum; 
};