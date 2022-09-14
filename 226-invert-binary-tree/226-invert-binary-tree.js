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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    const reverse = (node) => {
        if (!node) return;
        
        let left = node.left;
        let right = node.right;
        
        node.left = right;
        node.right = left;
        
        reverse(left);
        reverse(right);
        
    }
    
    reverse(root);
    
    return root;
    
//     if (!root) return null;
//     const node = root;
    
    
//     while (node) {
            
//         const left = node.left;
//         const right = node.right;
        
//         node.left = right;
//         node.right = left;
        
//         console.log(root)
//     }
    
//     return root;
};