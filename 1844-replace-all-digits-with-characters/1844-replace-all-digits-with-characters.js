/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    let replaced = "";
    
    for (let i = 0; i < s.length; i++) {
        
       if (i % 2 === 0) {
           replaced += s[i]
       } else {
          const idx = parseInt(s[i - 1].charCodeAt(0)) + parseInt(s[i])
          replaced += String.fromCharCode(idx)
       }
    }
    return replaced;
};

