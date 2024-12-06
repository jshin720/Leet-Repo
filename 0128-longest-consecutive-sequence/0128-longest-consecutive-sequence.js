/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums === null || nums.length === 0) return 0;

    let maxSeq = 0;
    const numsSet = new Set(nums);

    for (let i = 0; i < nums.length; i++) {
        if (numsSet.has(nums[i] - 1)) {
            continue;
        }

        let currNum = nums[i];
        let currMax = 1;

        while (numsSet.has(currNum + 1)) {
            currNum++;
            currMax++;
        } 
        maxSeq = Math.max(maxSeq, currMax);
    }

    return maxSeq;
}