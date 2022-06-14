/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    newSent = s.split(" ")
    
    return newSent.slice(0, k).join(" ")
};