/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
    const aArr = [];
    const bArr = [];
    
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "a")  {
            aArr.push(i)
        } else {
            bArr.push(i)
        }
    }
    
   
    for (let i = 0; i < bArr.length; i++) {
        for (let j = 0; j < aArr.length; j++) {
            if (bArr[i] < aArr[j]) return false; 
        }
    }
    
    return true; 
};