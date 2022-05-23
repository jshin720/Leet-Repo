/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    perm = [];
    
    for (let i = 0; i < nums.length; i++) {
        permNum = nums[i];
        
        perm.push(nums[permNum]);
    } 
    return perm; 
};