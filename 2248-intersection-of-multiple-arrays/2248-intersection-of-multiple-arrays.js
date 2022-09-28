/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
//     const firstNums = nums[0].sort((a, b) => a - b);
    
//     const intersect = firstNums.filter((num) => {
//         // let j = 0;
//         // console.log("num", num)
//         for (let i = 1; i < nums.length; i++) {
//             // console.log("otherNum", nums[i])
//             if (!nums[i].includes(num)) {
//                 return false;
//             }
//         }
//         // j = 0;
//         return true;
//     })
//    return intersect;
    const intersect = {};
    const flatten = nums.flat();
    // console.log(flatten)
    
    for (let i = 0; i < flatten.length; i++) {
        if(!intersect[flatten[i]]) {
            intersect[flatten[i]] = 1;
        } else {
            intersect[flatten[i]]++;
        }
    }
    const common = Object.keys(intersect).filter((num) => intersect[num] === nums.length)
    
    return common
};