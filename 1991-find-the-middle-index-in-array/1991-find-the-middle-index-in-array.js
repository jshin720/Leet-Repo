/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
    const sum = nums.reduce((a , b) => a + b, 0);
    let leftSum = 0;
    
    
    for (let i = 0; i < nums.length; i++) {
        let rightSum = sum - leftSum;
        leftSum += nums[i];
        if (leftSum === rightSum) return i;
        
        
        
        // console.log("rs", rightSum);
        // console.log("ls", leftSum)
    }
    
    return -1;
    
    
    
};