/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    nums = nums.sort((a, b) => a - b);
    let indices = [];
    
    for (let i = 0; i < nums.length; i++){
        nums[i] === target ? indices.push(i) : indices;
    }
    
    return indices;
    
};