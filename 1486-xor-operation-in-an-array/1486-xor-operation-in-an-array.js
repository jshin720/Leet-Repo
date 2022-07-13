/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let numsArr = [start];
    
    for (let i = 1; i < n; i++) {
        numsArr.push(start + 2 * i) ;
    }
    console.log(numsArr)
 
   return numsArr.reduce((a, b) => 
        // console.log(a, b)
         a ^ b 
    )
    
};