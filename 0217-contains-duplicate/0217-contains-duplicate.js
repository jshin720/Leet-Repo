/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const window = new Set();

    for (let right = 0; right < nums.length; right++) {
        if (window.has(nums[right])) return true;
        window.add(nums[right]);
    }
    return false;
};