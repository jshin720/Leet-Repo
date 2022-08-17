/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let sum = 0;
    let unique = {};
    
    for (let num of nums) {
        if(!unique[num]) {
            unique[num] = 1;
        } else {
            unique[num]++;
        }
    }
   
    for (let num in unique) {
        if (unique[num] <= 1) sum += Number(num); 
    }
    
    
   return sum;
};