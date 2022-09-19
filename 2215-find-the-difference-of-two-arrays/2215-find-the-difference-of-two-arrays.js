/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
//     const ansOne = [];
//     const ansTwo = [];
    
//     for (let num of nums1) {
//         if (!nums2.includes(num) && !ansOne.includes(num)) ansOne.push(num);    
//     }
    
//      for (let num of nums2) {
//         if (!nums1.includes(num) && !ansTwo.includes(num)) ansTwo.push(num);    
//     }
    
    
    num1 = new Set(nums1);
    num2 = new Set(nums2);
    
    const ansOne = [...num1].filter((num) => !num2.has(num));
    const ansTwo = [...num2].filter((num) => !num1.has(num));

    // console.log(ansOne, ansTwo)
    
    return [ansOne, ansTwo]
};