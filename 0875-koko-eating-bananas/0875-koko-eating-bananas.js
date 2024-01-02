/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let left = 1;
    let right = Math.max(...piles);
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2) 
        const hourSpent = getHourSpent(mid, piles);
     
        
        if (hourSpent > h) {
            left = mid + 1;
        } else if (hourSpent <= h) {
            right = mid;  
        } 
    }
    
 
    return right;
};

    const getHourSpent = (mid, piles, hourSpent = 0) => {
        for (const pile of piles) {
            hourSpent += Math.ceil(pile / mid);
     }

    return hourSpent;
};