/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
//     const ans = [];
    
//     for (let i = 0; i < words.length; i++) {
//         for (let j = i + 1; j < words.length; j++){
//             if(words[i].includes(words[j])) ans.push(words[j])
//             break;
//         }
//     }
//     console.log(ans)
    return words.filter(n => words.some(h => h !== n && h.includes(n)));
};