/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
  
    const wordSum = (word) => {
        let sum = word.split("");
        for (let i in word) {
            sum[i] = word[i].charCodeAt() - 97;
        }
        
        return Number(sum.join(""));
    }
    
    return wordSum(firstWord) + wordSum(secondWord) === wordSum(targetWord)
};