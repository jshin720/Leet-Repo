/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function(n, k) {
    const converted = n.toString(k);
    let sum = 0;
    
    for (const num of converted) {
        sum += +num
    }
    
    return sum;
};