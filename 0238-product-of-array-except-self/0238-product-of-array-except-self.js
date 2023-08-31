/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
//     const left = new Array(nums.length).fill(0);
//     left[0] = 1;
//     const right = new Array(nums.length).fill(0);
//     right[right.length - 1] = 1;
    
    
//     for (let i = 1;i < nums.length; i++) {
//         left[i] = nums[i - 1] * left[i - 1];
//     }
    
//     for (let i = right.length - 2; i >= 0; i--) {
//         right[i] = nums[i + 1] * right[i + 1];
//     }
    
//     for (let i = 0; i < nums.length; i++) {
//         nums[i] = left[i] * right[i];
//     }
    
//     return nums;
    
    let res = [];
    let start = 1;
    
    for (let i = 0; i < nums.length; i++) {
        res.push(start);
        start = start *nums[i];
    }
    
   
    let revStart = 1;
    
    for (let i = nums.length - 1; i >=0 ; i--) {
        res[i] = revStart * res[i];
        revStart = revStart * nums[i];
    }
    
    
    return res;
};