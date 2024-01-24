/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
//     if (s1.length > s2.length) return false;
    
//     let s1Map = new Array(26).fill(0);
//     let s2Map = new Array(26).fill(0);
    
//     for (let i in s1) {
//          s1Map[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
//          s2Map[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
//     }
    
//     // console.log(s1Map, s2Map)
    
//     let matches = 0;
    
//     for (let i = 0; i < 26; i++) {
//         s1Map[i] === s2Map[i] ? matches++ : 0;
//     }
    
//     let l = 0;
//     let r = s1.length;
//     console.log(r)
//     while (r <= s2.length) {
//         if (matches === 26) return true;
        
//         let index = s2.charCodeAt(r) - 'a'.charCodeAt(0);
//         s2Map[index] += 1;
//         if (s1Map[index] === s2Map[index]) {
//             matches += 1;
//         } else if (s1Map[index] + 1 === s2Map[index]) {
//             matches -= 1;
//         }
        
//         let idx = s2.charCodeAt(l) - 'a'.charCodeAt(0);
//         s2Map[idx] -= 1;
//         if (s1Map[index] === s2Map[index]) {
//             matches += 1;
//         } else if (s1Map[index] - 1 === s2Map[index]) {
//             matches -= 1;
//         }
//     }
    
//     return matches === 26
    
    
     if (s1.length > s2.length) {
        return false
    }
    
    const s1map = {}
    for (let i = 0; i < s1.length; i++) {
        let c = s1.charCodeAt(i)
        s1map[c] = s1map[c] ? s1map[c] + 1 : 1
    }
    
    for (let i = 0; i <= s2.length - s1.length; i++) {
        const s2map = {}
        
        for (let j = 0; j < s1.length; j++) {
            let c = s2.charCodeAt(i + j)
            s2map[c] = s2map[c] ? s2map[c] + 1 : 1
        }
        
        let allGood = 0
        for (prop in s1map) {
            if (s1map[prop] !== s2map[prop]) {
                break
            }
            allGood += s1map[prop]
        }
        
        if (allGood === s1.length) {
            return true
        }
    }
    
    return false
};
