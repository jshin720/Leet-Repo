/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {
    let count = 0;
    
    for (let pattern of patterns) {
        word.includes(pattern) ? count++ : count; 
    }
    return count;
};