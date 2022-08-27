/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
//     let count = 0;
    
//    while (!nums.every((num) => num === 0)) {
//        let min = Math.min(...nums.filter((num) => num !== 0) );
     
//        for (let i in nums) {
      
//            if (nums[i] !== 0) nums[i] -= min;
//        }
      
//        count++;
       
//    }
//     return count;
    
    return new Set(nums.filter((num) => num !== 0)).size;
};