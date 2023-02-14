/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const anagrams = {};
    
    for (let word of strs) {
        let wordKey = letterKey(word);
        
        if (!anagrams[wordKey]) {
            anagrams[wordKey] = [];
        }
        anagrams[wordKey].push(word);
        
    }
    return Object.values(anagrams);
};

const letterKey = (word) => {
    const key = new Array(26).fill(0);
    
    for (let i in word) {
        const charCode = word.charCodeAt(i) - "a".charCodeAt(0);
        key[charCode]++;
        // console.log("key", key)
    }
    return key;
}