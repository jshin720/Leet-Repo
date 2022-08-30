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
var increasingBST = function(root) {
  if (!root) return null;
  const newNode = new TreeNode()  

  let current = newNode;
    
    const dfs = (node) => {
        if (!node) return;
        dfs(node.left);
        current.right = new TreeNode(node.val);
        current = current.right;
        dfs(node.right);
    }
    
    dfs(root)
    return newNode.right;
  
};