/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    return arr.map((num, i) => {
        if (!arr[i + 1]) {
            return -1;
        } else {
            return Math.max(...arr.slice(i + 1));           
        }
    })
};