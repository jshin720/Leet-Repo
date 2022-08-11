/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
   let even = 0;
    
    nums.forEach((num) => String(num).length % 2 === 0 && even++);
    return even;
};