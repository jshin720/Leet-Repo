/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    const set = new Set()
    let pairCount = 0
    
    
    for (const num of nums) {
        if (!set.has(num))
            set.add (num)
        else {
            set.delete(num)
            pairCount++
        }
    }
    
    
    return [pairCount, set.size]
};