/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    const len = position.length, fleet = [];
    
    if (len < 2) return len;
    
    for (let i = 0; i < len; i++) {
        const arrivalTime = (target - position[i]) / speed[i];
        
        fleet.push([position[i], arrivalTime]);
    }
    
    fleet.sort((a, b) => a[0] - b[0])
    // console.log(fleet)
    let res = 1;
    for (let i = fleet.length - 1; i > 0; i--) {
        if (fleet[i][1] < fleet[i - 1][1]) {
            res++;
        } else {
            fleet[i-1][1] = fleet[i][1];
        }
        
    }
    // console.log(res)
    return res;
};