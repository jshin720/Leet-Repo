/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let i = 1;
    let count = 0;
    
    while (i < nums.length) {
        if(nums[i] <= nums[i - 1]) {
            nums[i]++;
            count++;
        } else if(nums[i] > nums[i -1]) {
            i++;
        };
    };
    return count; 
};