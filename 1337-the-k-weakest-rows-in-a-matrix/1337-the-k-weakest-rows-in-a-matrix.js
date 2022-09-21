/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
//     const weakest = {};
    
//     for (let i = 0; i < mat.length; i++) {
//         let countSol = 0
        
//         for (let j = 0; j < mat[i].length; j++) {
//             mat[i][j] === 1 && countSol++ 
//         }
        
//         weakest[i] = countSol;
//         countSol = 0;
      
//     }
    
//     const sorted =  Object.entries(weakest).sort((a ,b) => a[1] - b[1] )

//     const ans = [];
//     let i = 0;
//     while (ans.length < k) {
    
//         ans.push(sorted[i][0])
//         i++;
//     }
    
//     return ans;
    
    const map = {}, ans = [];
    
    for (let i = 0; i < mat.length; i++) {
        map[i] = 0;
        
        for (let j = 0; j < mat[i].length; j++) {
            mat[i][j] === 1 && map[i]++;
        }
        
        ans.push(i);
    }
    
    ans.sort((a, b) => map[a] - map[b]);
    return ans.slice(0, k)
};