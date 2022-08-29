/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    const unique = [...new Set(nums1), ...new Set(nums2), ...new Set(nums3)];
    const count = {};
    const outOf = [];
    
    
    for (let num of unique) {
        if (!count[num]) {
            count[num] = 1;
        } else {
            count[num]++;
        }
    } 
    
    for (let num in count) {
        count[num] >= 2 && outOf.push(num);
    }
    
    return outOf; 
};