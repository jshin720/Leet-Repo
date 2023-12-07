/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    
    for (let i = 0; i < matrix.length; i++) {
        let matrices = matrix[i]
        
        if (matrices[matrices.length - 1] < target) continue;
        
        let mid = Math.floor(matrices.length / 2);
        let left = 0;
        let right = matrices.length - 1;
        
        while (left <= right) {
            
            if (target === matrices[mid]) return true;
            if (target > matrices[mid]) {
                mid++;
                left = mid;
            } else {
                mid--;
                right = mid;
            }
        }
    }
    
    return false;
};