/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let restored = [];
    let sArr = s.split("");
    
    for (let i = 0; i < indices.length; i++) {
        restored[indices[i]] = sArr[i]
    }
   return restored.join("");
};