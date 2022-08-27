/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let xBinary = x.toString(2);
    let yBinary = y.toString(2);
    
    if (xBinary.length < yBinary.length) {
        xBinary = xBinary.padStart(yBinary.length, "0");
    } else {
        yBinary = yBinary.padStart(xBinary.length, "0");
    };
    
    console.log(xBinary, yBinary)
    let count = 0;
    for (let i in xBinary) {
        xBinary[i] !== yBinary[i] && count++
    }
    return count; 
};