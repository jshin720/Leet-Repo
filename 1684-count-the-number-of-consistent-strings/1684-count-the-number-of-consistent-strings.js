/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let strCount = 0;
    
    words.forEach(word => {
        let letterCount = 0;
        for (let char of word) {
            
            if (allowed.includes(char)) {
                letterCount++
            } else {
                letterCount = 0;
                break
            }
        }
        letterCount >= 1 ? strCount++ : strCount; 
    })
    return strCount; 
};