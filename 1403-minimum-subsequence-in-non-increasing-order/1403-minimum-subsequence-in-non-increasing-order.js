/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
    let total = nums.reduce((a, b) => a + b, 0);
    nums.sort((a, b) => b - a);
   
    const res = [];
    
    let sum = 0;
  
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        res.push(nums[i]);
       
        if (sum > (total- sum)) return res; 
    }
   
    
};