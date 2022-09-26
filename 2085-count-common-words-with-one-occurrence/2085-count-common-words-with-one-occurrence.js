/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
    let count = 0;
    const dupes1 = noDupes(words1);
    
    const dupes2 = noDupes(words2);
    
    
    for (let i = 0; i < words1.length; i++) {
        if(dupes1[words1[i]] === 1 && dupes2[words1[i]] === 1) count++;
    }
    return count; 
};

const noDupes = (word) => {
    const count = {};
    
    word.forEach((word) => {
        !count[word] ? count[word] = 1 : count[word]++;
    })
    
   
    
    return count; 
}