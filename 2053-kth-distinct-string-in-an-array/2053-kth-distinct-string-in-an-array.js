/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    const count = {};
    
    for (let char of arr) {
        
        if (!count[char]) {
            count[char] = 1;
        } else {
            count[char]++;
        }
    }
    
    // console.log(count)
    let distinct = [];
    
    for (let char in count) {
        if (count[char] === 1) distinct.push(char);
    }
    
    return distinct[k - 1] || "";
}; 