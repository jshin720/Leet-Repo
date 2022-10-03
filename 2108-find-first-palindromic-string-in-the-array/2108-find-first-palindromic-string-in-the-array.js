/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    
    for (let word of words) {
        if(isEqual(word)) return word;
    }
    return "";
}

const isEqual = (word) => {
    const revWord = word.split("").reverse().join("");
    
    for (let i = 0;i < word.length; i++) {
        if (word[i] !== revWord[i]) return false;
    }
    return true;
}