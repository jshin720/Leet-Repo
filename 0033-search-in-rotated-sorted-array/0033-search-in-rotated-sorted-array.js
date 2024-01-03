/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);
        
//         if (nums[mid] === target) return mid;
        
//         if (nums[left] <= nums[mid]) {
//             if (nums[left] <= target && target < nums[mid]) {
//                 right = mid--;
//             } else {
//                 left = mid++;
//             }
//         } else {
//             if (nums[mid] < target && target <= nums[right]) {
//                 left = mid++;
//             }  else {
//                 right = mid--;
//             }
//         }
//     }
    
     while (left <= right) {
        const mid = (left + right) >> 1;
        const guess = nums[mid];
        let leftNum = nums[left];
        let rightNum = nums[right];

        const isTarget = guess === target;
        if (isTarget) return mid;

        const isAscending = leftNum <= guess;
        if (isAscending) {
            const isInRange = leftNum <= target;
            const isLess = target < guess;

            const isTargetGreater = !(isInRange && isLess);
            if (isTargetGreater) left = mid + 1;

            const isTargetLess = isInRange && isLess;
            if (isTargetLess) right = mid - 1;
        }

        const isDescending = guess < leftNum;
        if (isDescending) {
            const isGreater = guess < target;
            const isInRange = target <= rightNum;

            const isTargetGreater = isGreater && isInRange;
            if (isTargetGreater) left = mid + 1;

            const isTargetLess = !(isGreater && isInRange);
            if (isTargetLess) right = mid - 1;
        }
    }

    return -1;
};