/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
//     let bph = 0;//bananas per hour
//     let mid = Math.floor(piles.length / 2);
    
    let left = 1;
    let right = Math.max(...piles);
    
//     while (min < max) {
        
//     }
    
//     const hrSpent = (mid, piles, hourSpent = 0) => {
//         for (let pile of piles) {
//             hourSpent += Math.ceil(pile /mid)
//         }
//         return hourSpent;
//     }
    

// };
    

    while (left < right) {
        const mid = (left + right) >> 1;
        const hourSpent = getHourSpent(mid, piles);

        const isTargetGreater = h < hourSpent;
        if (isTargetGreater) left = mid + 1;

        const isTargetLess = hourSpent <= h;
        if (isTargetLess) right = mid;
    }

    return right;
};

const getHourSpent = (mid, piles, hourSpent = 0) => {
    for (const pile of piles) {
        hourSpent += Math.ceil(pile / mid);
    }

    return hourSpent;
};