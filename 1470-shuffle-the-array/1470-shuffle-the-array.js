/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let xNums = nums.slice(0, n);
    let yNums = nums.slice(n, nums.length + 1)
    let l = Math.min(xNums.length, yNums.length)
    let newNums = [];
    
    for (let i = 0; i < l; i++) {
        newNums.push(xNums[i], yNums[i])
    }
    
    
    return newNums;
    
};