/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
     let set = new Set();
    
    for(let num of nums) {
        if(set.has(num)) {
            set.delete(num);
        } else {
            set.add(num);
        }
    }
    console.log(set)
    return set.size === 0;
};