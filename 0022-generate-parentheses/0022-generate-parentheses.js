/**
 * @param {number} n
 * @return {string[]}
 */

// const isValid = (str) => {
//     const stack = [];
//     let i = 0;
//     let len = str.length;
    
//     while (i < len) {
//         let curParan = str[i];
//         stack.push(curParan)
        
//         let open = stack[stack.length - 2];
//         let closed = stack[stack.length - 1];
        
//         if (open + closed === "()") {
//             stack.pop();
//             stack.pop();
//         }
//         i++;
//     }
//     return stack.length === 0;
// }

var generateParenthesis = function(n) {
    const res = [];
    
    
    const dfs = (i, n, slate, oCount, cCount) => {
        
        //backtracking case
        if (oCount > n) return;
        if(cCount > oCount) return
        
        //base case
        if (i === n * 2) {
            // if (isValid(slate.join(""))) {
            //     res.push(slate.join(""))
            // }
            res.push(slate.join(''))
            return;
        }
        //add open paran
            slate.push("(");
            dfs(i + 1, n, slate, oCount + 1, cCount);
            slate.pop();
    
        //add close paran
            slate.push(")");
            dfs(i + 1, n, slate, oCount, cCount + 1);
            slate.pop();
    
    }
    
   
    dfs(0, n, [], 0, 0);
    return res;
};

