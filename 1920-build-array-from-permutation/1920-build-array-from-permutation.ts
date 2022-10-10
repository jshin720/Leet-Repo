function buildArray(nums: number[]): number[] {
//     let ans: number[] = [];
    
//    for (let i in nums) {
//        ans.push(nums[nums[i]])
//    }
//     return ans;
    
    return nums.map((num) => nums[num]);
};