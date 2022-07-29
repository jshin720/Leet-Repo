/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    s = s.split("");
    
    for (let i = 0; i < s.length; i++) {
        
       if (i % 2 !== 0) {
          const idx = Number(s[i - 1].charCodeAt(0)) + Number(s[i])
          s[i] = String.fromCharCode(idx)
       }
    }
    return s.join("");
};

