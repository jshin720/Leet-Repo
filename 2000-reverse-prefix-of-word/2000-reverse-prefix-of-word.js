/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let idx = word.indexOf(ch) + 1;
    
    // if(!idx) return word;
    
    return word.slice(0, idx).split("").reverse().join("") + word.slice(idx);
    
};