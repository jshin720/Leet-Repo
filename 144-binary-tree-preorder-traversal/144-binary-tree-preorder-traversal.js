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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    const traverse = [];
    if (!root) return traverse;
    
    const stack = [root]
    
    while(stack.length > 0) {
        const node = stack.pop();
        if (!node) return;
        
        traverse.push(node.val);
         node.right && stack.push(node.right)
        node.left && stack.push(node.left);
       
        
    }
    return traverse
    
};