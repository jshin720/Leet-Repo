/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
//     const sum = nums.reduce((a , b) => a + b, 0);
//     let leftSum = 0;
    
    
//     for (let i = 0; i < nums.length; i++) {
//         let rightSum = sum - leftSum;
//         leftSum += nums[i];
//         if (leftSum === rightSum) return i;
        
        
        
//         // console.log("rs", rightSum);
//         // console.log("ls", leftSum)
//     }
    
//     return -1;
    let sum = nums.reduce((sum,a) => sum+=a,0);
    let leftSum = 0;
    let midIndex = -1;
    
    for(let i=0; i < nums.length; i++) {
        
        let rightSum = sum-leftSum-nums[i];
        // console.log(rightSum)
        if(rightSum === leftSum) {
            return i;
        } else {
            leftSum+= nums[i];
        }
        
    }
    
    return midIndex;
};