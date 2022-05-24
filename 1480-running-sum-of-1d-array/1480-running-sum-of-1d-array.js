/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    newSums = [nums[0]];
    for (i = 1; i < nums.length; i++) {
        newSums.push(newSums[i - 1] + nums[i]);
    };
    return newSums;
};