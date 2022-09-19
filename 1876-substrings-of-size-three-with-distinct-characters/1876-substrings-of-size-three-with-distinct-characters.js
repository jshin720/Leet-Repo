/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
   let goodStrs = 0;
   
    
    for (let i = 0; i < s.length; i++) {
        const word = s.substring(i, i + 3);
        if (word.length === 3 && new Set(word).size === 3) goodStrs++;
    }
    
    // console.log(uniques)
    return goodStrs;
};