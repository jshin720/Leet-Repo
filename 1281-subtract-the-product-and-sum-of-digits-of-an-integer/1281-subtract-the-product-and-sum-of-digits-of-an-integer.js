/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    
    const nums = String(n).split('').map((num) => Number(num))
    
    const product = nums.reduce((a, b ) => a * b)
    
    const sum = nums.reduce((a, b) => a + b)
    
    return product - sum
    
};