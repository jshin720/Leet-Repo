/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let strCount = 0;
    
    words.forEach(word => {
        let letter = true;
        for (let char of word) {
            
            if (!allowed.includes(char)) {
                letter = false;
                break
            }
        }
        letter ? strCount++ : strCount; 
    })
    return strCount; 
};