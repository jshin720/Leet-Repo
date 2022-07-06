/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let steps = 0;
    let newNum = num;
    
    while (newNum > 0) {
        if (newNum % 2 === 0) {
            newNum = newNum / 2;
        } else {
            newNum--
        }
        steps++
    }
    return steps; 
}
