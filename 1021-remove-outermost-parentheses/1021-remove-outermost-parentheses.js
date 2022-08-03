/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let removed = [];
    let count = 0;
    let start = 0;
    
    for (let i = 0; i < s.length; i++) {
          if (s[i] === "(") {
              count++;
          } else {
              count--;
          }
        if (count === 0) {
            removed.push(s.slice(start + 1, i));
            start = i + 1;
        }
    }
    return removed.join("")
};