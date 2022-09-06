/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const nextGreater = [];
    
    for (let num of nums1) {
        const idx = nums2.indexOf(num);
        let noGreater = false;
        
        for (let i = idx; i < nums2.length; i++) {
           
            if (nums2[i] > num) {
                nextGreater.push(nums2[i]);
                noGreater = true;
                break
            }
        }
        if (!noGreater) nextGreater.push(-1);
    }
    return nextGreater;
};