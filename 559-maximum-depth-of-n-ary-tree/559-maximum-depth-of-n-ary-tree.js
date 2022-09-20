/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0;
    
    let depth = 0;
    const queue = [root];
    
    while (queue.length > 0) {
       let size = queue.length;
        // console.log("size",size)
        // console.log("que-before", queue)
        for (let i = 0; i < size; i++) {
             const node = queue.shift();
            // console.log("node",node)
            queue.push(...node.children);
       
            // console.log("que-after", queue)
        } 
             // console.log("depth", depth)
        depth++;
      
    }
  return depth;
};