/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
   let sortedArr = nums.sort((a, b) => b - a);
    
    const num1 = sortedArr[0] * sortedArr[1];
    const num2 = sortedArr[sortedArr.length - 1] * sortedArr[sortedArr.length - 2];
    
    return num1 - num2 
}