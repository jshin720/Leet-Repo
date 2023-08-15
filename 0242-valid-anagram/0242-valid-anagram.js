/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const strCount = (str) => {
        const count = {};
        
        for (let i = 0; i < str.length; i++) {
            !count[str[i]] ? count[str[i]] = 1 : count[str[i]]++;  
        }
        return count;
    }
    
    if (s.length !== t.length) return false;
    const sCount = strCount(s);
    const tCount = strCount(t);
    
    for (let char of s) {
        // console.log(char)
       if (sCount[char] !== tCount[char]) return false;
    }
    
    return true;
};