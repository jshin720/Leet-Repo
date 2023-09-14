/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const valid = [];
    const pairs = { 
        ")": "(",
        "}": "{", 
        "]": "["
       };

    
    for (let char of s) {
        if (pairs[char] !== undefined) {
            if (valid[valid.length-1] === pairs[char]){
                valid.pop();
            } else {
                return false;
            }
        } else {
            valid.push(char);
        }
    }
    return valid.length === 0;
};