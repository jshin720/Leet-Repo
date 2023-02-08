/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let total = 0;
    let left = 0;
    let minLength = Infinity;
   
    for (let right = 0; right < nums.length; right++) {
        total += nums[right];
        
        while (total >= target) {
            minLength = Math.min((right - left) + 1, minLength);
            total -= nums[left]; 
            left++;
        }
    }
    return minLength === Infinity ? 0 : minLength;
};