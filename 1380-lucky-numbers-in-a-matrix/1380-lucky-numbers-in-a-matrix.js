/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
          
    const rowMin = (matrix) => {
        const min = new Set()
        for (let arr of matrix) {
            min.add(Math.min(...arr))
        } 
        return min;
    }
    
    const min = rowMin(matrix);
    
    for (let i = 0; i < matrix[0].length; i++){
        let max = 0;
        for (let j = 0; j < matrix.length; j++) {
            
            let col = matrix[j][i];
            console.log(i)
            if (max < col) max = col;    
          
        } 
        if(min.has(max)) {
            return [max];
        }
    }
    return [];
};