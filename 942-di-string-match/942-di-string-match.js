/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    const result = [];
    let dS = s.length;
    let iS = 0;
    
    for (let i = 0; i <= s.length; i++){
        if (s[i] === "I") {
          result.push(iS);
          iS++;  
        } else {
            result.push(dS);
            dS--;
        }
    }
  return result;
    
};