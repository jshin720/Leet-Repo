/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let duplicate =[s[0]];
    
    for (let i = 1; i < s.length; i++) {
        if (s[i] === duplicate[duplicate.length - 1]) {
            duplicate.pop()
        } else {
            duplicate.push(s[i]);
        }
    }
    return duplicate.join("")
};