/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(m, n, indices) {
    const matrix = new Array(m).fill(0).map(() => new Array(n).fill(0));
    let count = 0;
    
    for (let i in indices) {
        let [r, c] = indices[i]; // same as let r = indices[i][0]; let c = indices[i][1]; 
        // console.log("c", c);
       
        for (let j = 0; j < n; j++) {
            
            matrix[r][j]++
            // console.log("with r",matrix)
        }
        
        for (let k = 0; k < m; k++) { // hits the indices in the new arr -- [0,1],[1,1]
        // console.log("k", [k, c])
            matrix[k][c]++
            // console.log("with c",matrix)
        }
    }
    
    matrix.flat().forEach((num) => {if (num % 2 !== 0) count++})
    
    return count;
    
};