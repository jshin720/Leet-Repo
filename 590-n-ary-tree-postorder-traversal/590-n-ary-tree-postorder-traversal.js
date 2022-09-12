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
   
//     const posted = [];
//     const stack = [root];
   
//     while (stack) {
//         let node = stack.pop();
//         if (!node) return;
        

//         // console.log(node);
//         posted.push(node.val);
//         for (let i = 0; i < node.children.length; i++) {
//             stack.push(node.children[i]);
//         }
        
//       console.log(posted)
//     }
    
    
//     return posted; 
    
    const res = [];
    
    function post(node) {
        if (!node) return;
        for (let child of node.children) {
            post(child);
        }
        res.push(node.val);
    }
    post(root);
    return res;
};