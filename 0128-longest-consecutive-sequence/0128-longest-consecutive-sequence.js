/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const numsSet = new Set(nums);
    let longestSeq = 0;
    
    
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const prev = num - 1;
        
        let next = num + 1;
        let seq = 1;
        
        if (!numsSet.has(prev)) {
            while(numsSet.has(next)){
                seq++;
                next++;
            } 
            longestSeq = Math.max(longestSeq, seq);
        }
        
    }
    
    return longestSeq;
};