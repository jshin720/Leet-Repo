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
var inorderTraversal = function(root) {
    if (!root) return [];
    
    const traverse = [];
    
    const dfs = (node) => {
        if (!node) return;
          
      
       
        node.left && dfs(node.left);
          traverse.push(node.val);
        node.right && dfs(node.right);
        
    }
    dfs(root)
   return traverse
    
};