/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    let mapped = [];

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === "#") {
            mapped.unshift(String.fromCharCode(Number(s[i - 2] + s[i - 1]) + 96))
            i -= 2;
            continue;
        } 
        mapped.unshift(String.fromCharCode(Number(s[i]) + 96))
    }
    
    return mapped.join("")
};