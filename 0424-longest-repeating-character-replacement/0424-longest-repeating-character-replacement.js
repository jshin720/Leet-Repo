/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let res = 0;
    const count = new Map();
    let left = 0;
    
    for (let right in s){
        let len = right - left + 1;
        
        count.set(s[right], 1 + (count.get(s[right]) || 0))
        // console.log(count)
        if ((len - Math.max(...count.values())) > k) {
            count.set(s[left], count.get(s[left]) - 1);
            left += 1;
        }
        
        len = right - left + 1;
        res = Math.max(res, len)
    }
    return res;
};

