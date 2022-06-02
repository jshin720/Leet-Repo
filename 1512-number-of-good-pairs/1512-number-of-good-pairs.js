/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let goodPairs = 0;
    let arr = []
    
    for (let i = 0;i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++){
            if (nums[i] == nums[j] && i < j) {
             goodPairs++;
            }
              // arr.push([nums[i], nums[j]])
        }
     
          
    }
    return goodPairs;
};