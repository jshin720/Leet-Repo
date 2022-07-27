/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    let count = 0;
    let linePairs = s.split("|")
    
    for (let i = 0; i < linePairs.length; i += 2) {
        for (let char of linePairs[i]) {
            char === "*" ? count++ : count;
        }
    }
    return count; 
};