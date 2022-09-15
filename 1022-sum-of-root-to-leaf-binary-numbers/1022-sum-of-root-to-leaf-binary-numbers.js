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
 * @return {number}
 */
var sumRootToLeaf = function(root) {
    // if (!root) return 0;
    
    let sum = 0;
    
    const dfs = (node, val = '') => {
        if (!node) return;
        
        val += node.val;
       
        if (!node.left && !node.right) {
            sum += parseInt(val, 2);
        }
        
        node.left && dfs(node.left, val);
        node.right && dfs(node.right, val);
    }
    
    root && dfs(root);
    return sum;
};