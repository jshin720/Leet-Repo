/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    const ans = [];
    
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++){
           if (words[i] !== words[j])
           if (words[j].includes(words[i]))
            if(!ans.includes(words[i]))
               ans.push(words[i])
        }
    }
    
    // words.filter((n) => {
    //     console.log("n", n)
    //     return words.some((h) => {
    //        return  h !== n && h.includes(n);
    //      )}
    //  )}
                 
//    return words.filter((n) => {
//         console.log("n", n);
        
//         return words.some((h) => {
//             console.log("h", h)
//            return h !== n && h.includes(n); 
//         })
//     })
    return ans
        
};