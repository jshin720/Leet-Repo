function getConcatenation(nums: number[]): number[] {
    // return nums.concat(nums)
    return [...nums, ...nums]
};