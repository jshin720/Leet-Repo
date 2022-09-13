/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    if (!root) return [];
    const result = [];
    const queue = [root];
    
    
    while (queue.length > 0) {
        const node = queue.pop();
        // if (!node.children) return;
        // console.log(node)
        result.push(node.val);

        
        for (let i = node.children.length -1; i >= 0; i--) {
            queue.push(node.children[i])
        }
        // console.log(queue)
        
        
    }
    return result;
    
};