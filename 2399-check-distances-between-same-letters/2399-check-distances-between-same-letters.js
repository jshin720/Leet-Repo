/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function(s, distance) {
//     const spaced = letterIdx(s);
//     console.log(spaced)
    
    
//     for (let char in spaced) {
        
//         if (spaced[char] <= distance[char] ) {
//             return false;
//         } else if (spaced[char] >= 51) {
//             return false;
//         }
//     }
//     return true;
// };

// const letterIdx = (s) => {
//     const idx = {};
//     for (let i = 0; i < s.length; i++) {
//         let char = s[i].charCodeAt(0) - 97;
//         if (!idx[char]) {
//             idx[char] = i;
//         } else {
//             idx[char] = Math.abs(idx[char] - i);
//         };
//     }
//     return idx;
    
     for (let c of new Set(s))
    if (s.lastIndexOf(c) - s.indexOf(c) - 1 !== distance[c.charCodeAt(0) - 97])
      return false;
  return true
}