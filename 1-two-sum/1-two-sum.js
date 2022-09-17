/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (nums[i] + nums[j] === target) return [i, j];
    //     }
    // }
    
    const mapped = {};
    
    for (let i = 0; i < nums.length; i++) {
        let targetNum = target - nums[i];
        
       if (mapped[targetNum] !== undefined) {
            return [mapped[targetNum], i];
       } else {
           mapped[nums[i]] = i;
       }
    }
};