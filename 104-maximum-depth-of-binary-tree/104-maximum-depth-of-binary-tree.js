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
var maxDepth = function(root) {
    
//     const dfs = (node, depth = 0) => {
//         if (!node) return depth;
        
//          return Math.max(dfs(node.left, depth + 1), dfs(node.right, depth + 1)); 
//     };
    
//     return dfs(root);
    
    
    return root ? Math.max(maxDepth(root.left), maxDepth(root.right)) + 1 : 0
};