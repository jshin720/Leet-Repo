/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    const freq = {};
    
    for (let num of nums) {
        if (!freq[num]) {
            freq[num] = 1;
        } else {
            freq[num]++;
        }
    };
    
    
    return nums.sort((a, b) => freq[a] - freq[b]  || b - a);
};