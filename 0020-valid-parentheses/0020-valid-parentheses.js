/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const valid = [];
    let firstChar = s[0];
    valid.push(firstChar);
    
    for (let i = 1; i < s.length; i ++) {
        let lastChar = valid[valid.length -1];
        
        if (lastChar === "(" && s[i] === ")") {
            valid.pop(); 
        } else if (lastChar === "[" && s[i] === "]") {
            valid.pop();
        } else if (lastChar === "{" && s[i] === "}") {
            valid.pop();
        } else {
            valid.push(s[i]);
        }
        
        
    }
    
    return valid.length === 0
};