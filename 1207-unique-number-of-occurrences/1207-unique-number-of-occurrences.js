/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
//     const map = {};
//     const unique = new Set()
    
//     for (let num of arr) {
//         if (!map[num]) {
//             map[num] = 1;
//         } else {
//             map[num]++;
//         }
//     }
    
//     for (let count in map) {
//         if (!unique.has(map[count])) {
//             unique.add(map[count])
//         } else {
//             return false;
//         }
//     }
//     return true; 
    let obj = arr.reduce((a,c) => {
    a[c] = a[c] + 1 || 1
    return a
},{})

let values = Object.values(obj)
return values.length  == new Set(values).size
};