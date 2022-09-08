/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    const sorted = arr.sort((a, b) => a - b);
    let min = minDifference(sorted);
    const difference = [];
    
    for (let i = 0; i < sorted.length - 1; i++) {
        if (sorted[i + 1] - sorted[i] === min) difference.push([sorted[i], sorted[i + 1]]);
    }
    
    return difference; 
};

const minDifference = (arr) => {
        let min = null;
        
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i + 1] - arr[i]  < min || min === null) {
                min = arr[i + 1] - arr[i];
            }
        }
        return min; 
    }