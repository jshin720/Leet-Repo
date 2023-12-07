/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
   
    let mid = Math.floor(nums.length - 1 / 2);
    
    let left = 0
    let right = nums.length - 1;
    
    while (left <= right ) {
        if (target === nums[mid]) return mid;
        
        if (target > nums[mid]) {
            mid++;
            left = mid;
        } else {
            mid--;
            right = mid;
        }
    }
    
    
    return -1;
};
