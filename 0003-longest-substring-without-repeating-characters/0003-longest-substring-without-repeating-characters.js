/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    const nonRepeating = new Set();
    let ans = 0;
    let left = 0;
    
    for (let right in s) {
        // console.log(right)
        while (nonRepeating.has(s[right])) {
            nonRepeating.delete(s[left]);
            left += 1;
            // console.log(nonRepeating)
        }
        
        nonRepeating.add(s[right]);
        
        // console.log(nonRepeating, "after")
        
        ans = Math.max(ans, right - left + 1)
        // console.log("ans", ans)
    }
    return ans;
};