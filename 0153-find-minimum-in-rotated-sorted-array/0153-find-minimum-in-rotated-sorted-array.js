/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
   let left = 0;
   let right = nums.length - 1;
    
    while (left < right) {
        const mid = Math.floor((right + left) / 2);
        const midNum = nums[mid];
        const leftNum = nums[left];
        const rightNum = nums[right];

        if (leftNum < rightNum) return leftNum;
        
        if (leftNum <= midNum) left = mid + 1;

        if (midNum < leftNum) right = mid; 
       
    }
    return nums[left];
};

