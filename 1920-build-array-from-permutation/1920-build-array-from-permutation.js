/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    perm = [];
    
    for (let i = 0; i < nums.length; i++) {
        
        perm.push(nums[nums[i]]);
    } 
    return perm; 
};