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
            
            if (max < col) max = col;    
          
        } 
        if(min.has(max)) {
            return [max];
        }
    }
    return [];
//     const luckyNumbers = [];
    
//     for (let i = 0; i < matrix.length; i++) {
//         const [minValue, columnIndex] = matrix[i].reduce((result, value, index) => {
//             return (!result[0] || value < result[0]) ? [value, index] : result;
//         }, []);
        
//         for (let j = 0; j < matrix.length; j++) {
//             if (matrix[j][columnIndex] > minValue) {
//                 break;
//             }
            
//             if (j === matrix.length - 1) {
//                 luckyNumbers.push(minValue);
//             }
//         }
//     }
    
//     return luckyNumbers;
};