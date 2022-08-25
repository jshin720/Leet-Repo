/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    // if (!nums.includes(original)) return original;
    
    while (nums.includes(original)) {
        original = original * 2;
    }
    return original;
};