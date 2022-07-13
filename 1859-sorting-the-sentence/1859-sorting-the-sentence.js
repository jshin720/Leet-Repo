/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let sorted = [];
    let sArr = s.split(" ");
    
    for (let word of sArr) {
        sorted[word.slice(-1)] = word.slice(0, -1)
        
    }
    
    return sorted.slice(1).join(" ")
};