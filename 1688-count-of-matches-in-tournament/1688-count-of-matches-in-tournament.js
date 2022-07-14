/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    let matches = [];
    
    while (n > 1) {
        if (n % 2 === 0) {
            matches.push(n / 2);
            n = n / 2;
        } else {
            matches.push((n - 1) / 2);
            n = (n - 1) / 2 + 1;   
        }
    }
    return matches.reduce((a, b) => a + b, 0)
};