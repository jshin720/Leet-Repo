/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const ansOne = [];
    const ansTwo = [];
    
    for (let num of nums1) {
        if (!nums2.includes(num) && !ansOne.includes(num)) ansOne.push(num);    
    }
    
     for (let num of nums2) {
        if (!nums1.includes(num) && !ansTwo.includes(num)) ansTwo.push(num);    
    }
    
    
    return [ansOne, ansTwo]
};