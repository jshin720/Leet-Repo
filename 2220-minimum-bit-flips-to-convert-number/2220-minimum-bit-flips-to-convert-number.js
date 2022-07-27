// /**
 // * @param {number} start
 // * @param {number} goal
 // * @return {number}
 // */
var minBitFlips = function(start, goal) {
    let sBinary = start.toString(2);
    let gBinary = goal.toString(2);
    let count = 0;
 
    if (sBinary.length > gBinary.length) {
        gBinary = gBinary.padStart(sBinary.length, "0")
    }
    
    if (gBinary.length > sBinary.length) {
        sBinary = sBinary.padStart(gBinary.length, "0")
    }
    
    
    for (let i = sBinary.length - 1; i >= 0; i--) {
         console.log(sBinary[i])
         console.log(gBinary[i])
       gBinary[i] !== sBinary[i] ? count++ : count; 
    }
    return count; 
};