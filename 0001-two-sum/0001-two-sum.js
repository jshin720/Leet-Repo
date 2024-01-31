/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const indices = {};
    console.log(nums)
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        
        if (indices[target - num] === undefined) {
            indices[num] = i
        } else {
            return [indices[target - num], i];
        }
            
    }
    
   

    
};