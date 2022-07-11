/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let targetArr = [];
    
    for (let i = 0; i < index.length; i++) {
        if (index[i] < targetArr.length) {
            targetArr.splice(index[i], 0, nums[i])
        } else {
            targetArr.push(nums[i])
        }
    }
    return targetArr
};