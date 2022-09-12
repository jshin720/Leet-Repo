/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
   if (!root) return [];
    const posted = [];
    const stack = [root];
  
    while (stack.length !== 0) {
        let node = stack.pop();
        if (!node) return;
        
        posted.push(node.val);
        for (let i = 0; i < node.children.length; i++) {
            stack.push(node.children[i]);
        }
    }
    
    
    return posted.reverse(); 
    
//     const res = [];
    
//     function post(node) {
//         if (!node) return;
//         for (let child of node.children) {
//             post(child);
//         }
//         res.push(node.val);
//     }
//     post(root);
//     return res;
};