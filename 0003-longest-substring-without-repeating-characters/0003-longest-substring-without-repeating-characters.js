/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const charSet = new Set()
    let longest = 0;
    let left = 0;
    
    for (let right = 0; right < s.length; right++) {
        while(charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }
        charSet.add(s[right]);
        longest = Math.max(longest, charSet.size);
    }
    return longest;
};