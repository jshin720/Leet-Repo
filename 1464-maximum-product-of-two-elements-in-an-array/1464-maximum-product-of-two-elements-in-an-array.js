/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxArr = nums.sort((a, b) => b - a)
    return (maxArr[0] - 1) * (maxArr[1] - 1);
};