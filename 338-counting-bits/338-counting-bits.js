/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const count = [];
    let i = 0;
    while (i <= n) {
        let bitCount = i
            .toString(2)
            .split("")
            .filter((num) => num === "1").length;
        count.push(bitCount)
        i++;
    }
    
    return count;
    
};