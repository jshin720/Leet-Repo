/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const ans = [];
    nums = nums.sort((a, b) => a - b);
    
   
   for (let i = 0; i < nums.length; i++) {
       let numI = nums[i];
       let left = i + 1;
       let right = nums.length - 1;
       
       if (i > 0 && numI === nums[i - 1] ) continue;
       
       while (left  < right) {
           let numJ = nums[left];
           let numK = nums[right];
           let sum = numJ + numK + numI;
           
           if (sum > 0) {
               right--;
           } else if (sum < 0) {
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