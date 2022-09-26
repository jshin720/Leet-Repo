/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
    const uppers = new Set();
    const lowers = new Set();
    
    for (let char of s) {
        if (char === char.toUpperCase()) {
            uppers.add(char);
        } else {
            lowers.add(char);
        }
    }
    
    const uppersArr = [...uppers].sort((a, b) => b.charCodeAt() - a.charCodeAt(), "")
    
    for (let char of uppersArr) {
        if(lowers.has(char.toLowerCase()))
            return char;
    }
    return "";
};