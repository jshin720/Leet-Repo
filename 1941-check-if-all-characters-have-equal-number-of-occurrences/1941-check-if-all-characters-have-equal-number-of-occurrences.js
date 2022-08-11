/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    const occur = {};
    
    for (let i = 0; i < s.length; i++) {
        if (!occur[s[i]]) {
             occur[s[i]] = 1 ;
        } else {
            occur[s[i]]++;
        } ;
    };
    
    for (let key in occur) {
        if (occur[s[0]] !== occur[key]) return false;
    }
    return true; 
};