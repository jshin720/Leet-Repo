/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
    let even = 0, odd = 0;
    
    for (let i of position) {
        if (i % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    };
    
    return Math.min(even, odd)
};