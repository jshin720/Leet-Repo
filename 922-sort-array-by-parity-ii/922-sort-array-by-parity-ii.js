/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    const evenNums = nums.filter((num) => num % 2 === 0);
    const oddNums = nums.filter((num) => num % 2 !== 0);

    const sorted = [];
    let i = 0;
   while(sorted.length < nums.length) {
       if (i % 2 === 0) {
           sorted.push(evenNums.pop());
       } else {
           sorted.push(oddNums.pop());
       };
       i++;
   }
    return sorted;
};