/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let merged = "";
    let wordlength = word1.length <= word2.length ? word1.length : word2.length;
    let i = 0;
    
    while (i < wordlength) {
        merged += word1[i] + word2[i];
        
        i++;
    }
   
    return merged +=  word1.length <= word2.length ? word2.slice(i) : word1.slice(i);
};