/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0, right = numbers.length - 1;
    
    
    while (left < right) {
        let leftNum = numbers[left];
        let rightNum = numbers[right];
        
        if (leftNum + rightNum === target ) return [left += 1, right += 1];
        if (leftNum + rightNum < target) {
            left++;
        } else if (leftNum + rightNum > target) {
            right--;
        }
    }
};