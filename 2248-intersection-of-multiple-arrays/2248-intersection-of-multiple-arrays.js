/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    const firstNums = nums[0];
    
    const intersect = firstNums.filter((num) => {
        // let j = 0;
        // console.log("num", num)
        for (let i = 1; i < nums.length; i++) {
            // console.log("otherNum", nums[i])
            if (!nums[i].includes(num)) {
                return false;
            }
        }
        // j = 0;
        return true;
    })
   return intersect.sort((a, b) => a - b);
};