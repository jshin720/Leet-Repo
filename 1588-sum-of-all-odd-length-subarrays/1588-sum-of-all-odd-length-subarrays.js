/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let oddArrSums = [];
    
    for (let i = 0; i <= arr.length; i++) {
        for (let j = 0; j <= arr.length; j++) {
            let subArr = arr.slice(i, j)
            const subArrSums = subArr.reduce((a, b) => a + b, 0);
            
            if (subArr.length % 2 !== 0) {
                oddArrSums.push(subArrSums);
            }
        }
    }
     return oddArrSums.reduce((a, b) => a + b)
};