/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const indices = {};
    
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
         console.log(indices[target - num])
        if (indices[target - num] === undefined) {
            indices[num] = i
        } else {
            return [indices[target - num], i];
        }
            
    }
    
    console.log(indices)

    
};