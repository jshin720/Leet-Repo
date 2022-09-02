/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    let words = text.split(" ");
    let broken = new Set(brokenLetters);
    let count = 0;
   

    for (let word of words) {
        let char = 0;
        for (let letter of word) {
           broken.has(letter) && char++
        }
        char === 0 && count++;
    }
    return count; 
};