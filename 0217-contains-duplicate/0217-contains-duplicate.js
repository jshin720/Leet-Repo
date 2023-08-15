/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
//     const window = new Set();

//     for (let right = 0; right < nums.length; right++) {
//         if (window.has(nums[right])) return true;
//         window.add(nums[right]);
//     }
//     return false;
    
    const anyDupes = new Set();
    
    for (let i = 0; i < nums.length; i++) {
        if (anyDupes.has(nums[i])) return true;
        anyDupes.add(nums[i]);
    }
    return false;
};