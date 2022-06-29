/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let greatest = [];
    
    candies.forEach((candy) => 
        greatest.push((candy+extraCandies) >= Math.max(...candies))               
    );
    return greatest;
};