/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
    
    let i = 2;
    
    while (true) {
        if(i % 2 == 0 && i % n === 0) return i;
        i++
    }
    
    
    
};