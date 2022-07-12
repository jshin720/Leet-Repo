/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function(s) {
    let cellsArr = [];
    let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    for (let c = alpha.indexOf(s[0]), r = alpha.indexOf(s[3]); c <= r; c++) {
        for (let i = s[1], j = s[s.length - 1]; i <= j; i++) {
            cellsArr.push(alpha[c] + i);
        }
    }
    return cellsArr
};