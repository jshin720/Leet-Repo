/**
 * @param {string[]} strs
 * @return {number}
 */
 
// ["cba","daf","ghi"]
// ["zyx","wvu","tsr"]
var minDeletionSize = function(strs) {
//    const colsArr = [];
//     const wordsLen = strs[0].length;
    
//     for (let i = 0; i < wordsLen; i++) {
//         let words = "";
        
//         // if (strs[i].length === 1) {
//         //     colsArr.push(strs[i])    
//         //     continue;
//         // }
        
//         for (let j = 0; j < strs.length; j++) {
//             words += strs[j][i];
//         }
//         colsArr.push(words);
//         words = "";
//     }
//     console.log(colsArr)
//     const minSize = colsArr.filter((word) => !sortedEquals(word));
    
//     return minSize.length;
// };


// const sortedEquals = (str) => {
//     // const sorted = str.split("").sort()
   
//     for (let i = 0; i < str.length - 1; i++) {
//         if (str[i] > str[i + 1]) return false;
//     }
//     return true;     
    let num = 0;
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] < strs[j-1][i]) {
                num ++; // everytime is hits a letter where the previous letter is greater it breaks out and num++(deletion)
                break;
            }
        }
    }
    return num;
} 