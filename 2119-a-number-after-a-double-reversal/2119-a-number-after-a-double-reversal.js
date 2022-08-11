/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    return String(parseInt(String(num).split("").reverse().join(""))).split("").reverse().join("") == num; 
};