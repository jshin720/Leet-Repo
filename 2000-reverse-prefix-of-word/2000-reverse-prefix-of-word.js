/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let idx = word.indexOf(ch) + 1;
    
    let wordArr = word.split("")
    
    return wordArr.slice(0, idx).reverse().join("") + word.slice(idx);
    
};