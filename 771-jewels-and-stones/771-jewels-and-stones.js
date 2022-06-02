/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    
    jewels.split("").forEach((jewel) => {
        stones.split("").forEach((stone) => {
            if(jewel === stone) count++;
        })
    } )
    return count;
};