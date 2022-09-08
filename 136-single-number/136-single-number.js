/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const single = new Set();
    
    for (let num of nums) {
        
        if (!single.has(num)) {
            single.add(num);
        } else {
            single.delete(num)
        }
    }
    
    
    return single.values().next().value;
};