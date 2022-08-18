/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    const repeated = {};
    let nTimes = nums[0];
    
    for (let num of nums) {
        // console.log(num)
        if (!repeated[num]) {
            repeated[num] = 1;
        } else {
            repeated[num]++;
        }
    }
    for (let num in repeated) {
        
        if (repeated[num] > 1 && repeated[num] >= repeated[nTimes]) nTimes = num;
        
    }
    return nTimes;
};