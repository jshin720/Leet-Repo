/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let begin = 0;
    let end = numbers.length - 1;

    
    while (begin <= end) {
        if (numbers[begin] + numbers[end] === target) {
            return [begin + 1, end + 1]
        }
        if (numbers[begin] + numbers[end] > target) {
            end--;
        } else if (numbers[begin] + numbers[end] < target) {
            begin++;
        }
    }
};