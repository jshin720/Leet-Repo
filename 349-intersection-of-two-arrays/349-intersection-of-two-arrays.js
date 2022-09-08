/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
   nums1 = [...new Set(nums1)];
     const unique2 = new Set(nums2)
    const intersect = [];
    
    
    for (let num of nums1) {
        if (unique2.has(num)) intersect.push(num);
    }
    
    
    return intersect;
};