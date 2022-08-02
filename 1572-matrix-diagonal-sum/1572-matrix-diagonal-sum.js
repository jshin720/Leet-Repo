/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let sumArr = [];
    let primaryD = 0;
//     let secondaryD = mat[0].length - 1;
//      // console.log("before", primaryD, secondaryD);
    
    
//     for (let i = 0; i < mat.length; i++) {
//        // console.log(!sumArr.includes(mat[i][primaryD]), !sumArr.includes(mat[i][secondaryD]))
        
//         if (primaryD !== secondaryD) {
//             sumArr.push(mat[i][primaryD])
//             sumArr.push(mat[i][secondaryD])
//         } else {
//             sumArr.push(mat[i][primaryD])
//         }
//         primaryD++;
//         secondaryD--;
//         // console.log("after", primaryD, secondaryD);
//     }
//     return sumArr.reduce((a, b) => a + b)
      let sum = 0 ;
    for(let i = 0;i<mat.length;i++){
      sum+= mat[i][i];
    }
    for(let i = 0;i<mat.length;i++){
        if(i != mat.length-1-i ){
            sum+= mat[i][mat.length-1-i];
        }
    }
    return sum 
};