/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let zero = [];
    let i = 1;
    if (n % 2 !== 0 ) zero.push(0);
    
    while (zero.length < n) {
        zero.push(-i);
        zero.unshift(i);
        i++
    }

   return zero;
};