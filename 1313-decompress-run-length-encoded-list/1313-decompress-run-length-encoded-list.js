/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let arr = []
    for (let i = 0; i < nums.length - 1; i++) {
        ;
        let freq = 0;
        if (nums[2 * i]) freq = nums[2 * i];
        
        while (freq > 0) {
            arr.push( nums[2 * i + 1])
            freq--;
        }
        
    }
    return arr; 
};