/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
    s = s.split("");
  
    
    if (s.join("") === s.reverse().join("")) {
        return 1;
    } else if (s.slice(1).join("") === s.slice(1).reverse().join("") ) {
        return 1 + removePalindromeSub(s.slice(1).join(""));
    } else if (s.slice(0, -1).join("") === s.slice(0, -1).reverse().join("")) {
        return removePalindromeSub(s.slice(0, -1).join("")) + 1;
    } else {
        return [...new Set(s)].length;
    }
};