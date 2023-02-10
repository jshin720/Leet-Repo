/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  
    s = s.trim().split(" ");
     let lastWord = s[s.length - 1];
    
    return lastWord.length 
};