/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const row = new Set();
    const col = new Set();
    
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[r].length; c++){
            if (matrix[r][c] === 0) {
                row.add(r);
                col.add(c)
            }
        }
    }
  
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[r].length; c++) {
            if (row.has(r) || col.has(c)) matrix[r][c] = 0
        }
    }
};