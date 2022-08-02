/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    let mapped = [];
//     let premapped = s.split("");
    
    
//     console.log(premapped)
//     while(premapped) {
//          let end = premapped.length - 1;
//          if (premapped[premapped.end] === "#") {
//             mapped.unshift(String.fromCharCode(Number(premapped[end - 2] + premapped[end - 1]) + 96))
//             premapped.slice(0, premapped[end - 2])
//         } else {
//             mapped.unshift(String.fromCharCode(Number(premapped[end]) + 96))
//             premapped.slice(0, premapped[end])
//         }
//     }
        
    // }
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === "#") {
            mapped.unshift(String.fromCharCode(Number(s[i - 2] + s[i - 1]) + 96))
            i -= 2;
            continue;
        } 
        mapped.unshift(String.fromCharCode(Number(s[i]) + 96))
    }
    console.log(mapped)
    return mapped.join("")
};