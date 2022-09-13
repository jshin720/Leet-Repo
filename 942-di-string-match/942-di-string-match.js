/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    const result = [];
    let end = s.length, front = 0;
    
    for (let i = 0; i <= s.length; i++){
        if (s[i] === "I") {
          result.push(front);
          front++;  
        } else {
            result.push(end);
            end--;
        }
    }
  return result;
    
};