/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let count = 0;
    let rCount = 0;
    let lCount = 0;
        
    for (let i = 0; i < s.length; i++) {
        s[i] === "R" && rCount++;
        s[i] === "L" && lCount++;
        rCount === lCount && count++;
    }
    return count
};