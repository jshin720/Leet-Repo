/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    let count = 0;
    // console.log(words[0].indexOf(pref))
    
    
    words.forEach((word) => {
        
        word.indexOf(pref) === 0 ? count++ : count
    });

    
    return count;
};