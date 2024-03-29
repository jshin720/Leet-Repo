/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
//     let depth = 0;
//     let maxDepth = 0;
    
//     for (let char of s ) {
//         if (char === "(") depth++;
//         if (char === ")") depth--;
//         depth > maxDepth ? maxDepth = depth : maxDepth;
//     }
//     return maxDepth; 
    
    let depth = 0;
    let maxDepth = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") depth++;
        if (s[i] === ")") depth--;
        
        maxDepth = Math.max(depth, maxDepth)
    } 
    
    return maxDepth
};