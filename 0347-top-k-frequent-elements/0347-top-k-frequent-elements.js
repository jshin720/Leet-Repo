/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const count = new Map();
    // const sorted = [...new Set(nums)];
    
    for (let num of nums) {
        if (!count.has(num)) {
            count.set(num, 1);
        } else {
            count.set(num, count.get(num) + 1);
        }
    }
    
    const sorted = [];
    for (let [key, value] of count) {
        sorted.push([key, value]);
    }
      // console.log(count)
      // console.log(sorted)
    
    const mapped = sorted.sort((a, b) => b[1] - a[1])
    // console.log(mapped)
    let res = [];
    

        for (let num of mapped) {
            res.push(num[0]);
        }
   
    return res.slice(0, k)
};