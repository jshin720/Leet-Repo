/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const ans = [];
    nums = nums.sort((a, b) => a - b);
    
    console.log(nums)
    
   for (let i = 0; i < nums.length; i++) {
       let numI = nums[i];
       let left = i + 1;
       let right = nums.length - 1;
       
       if (i > 0 && numI === nums[i - 1] ) continue;
       const target = 0 - numI;
       
       while (left  < right) {
           let numJ = nums[left];
           let numK = nums[right];
           let sum = numJ + numK;
           
           if (sum > target) {
               right--;
           } else if (sum < target) {
               left++;
           } else  {
               ans.push([numI, numJ, numK]);
               while(nums[left] === nums[left + 1]) left++;
               while(nums[right] === nums[right - 1]) right--;
               left++;
               right--;
           }
       }
       
   }
    
    return ans; 
};