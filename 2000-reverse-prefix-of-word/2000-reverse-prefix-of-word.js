/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let idx = word.indexOf(ch);
    
    if(!idx) return word;
    
    return word.slice(0, idx + 1).split("").reverse().join("") + word.slice(idx + 1);
    
};