/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
//      if (s.length === 0 || s.length % 2 !== 0){
//         return false;
//     }
//     const sArr = s.split("")
//     const validArr = [sArr.shift()];
//     // const counter = {};

//     for (let i = 0; i < sArr.length; i++) {
//         // if (!counter[s[i]]) {
//         //     counter[s[i]] = 1;
//         // } else {
//         //     counter[s[i]]++;
//         // }
//         if (sArr[i] === ")" && validArr[validArr.length - 1] === "(") {
//             validArr.pop();
//         } else if (sArr[i] === "}" && validArr[validArr.length - 1] === "{") {
//             validArr.pop();
//         } else if (sArr[i] === "]" && validArr[validArr.length - 1] === "["){
//             validArr.pop();
//         } else {
//             validArr.push(sArr[i])
//         }
       
//     }

    // console.log(validArr)

    // for (let str in counter) {
    //     if (counter["("] !== counter[")"]) return false;
    //     if (counter["{"] !== counter["}"]) return false;
    //     if (counter["["] !== counter["]"]) return false;
    // }

    // return validArr.length === 0
//     if (s.length === 0 || s.length % 2 !== 0) return false;
//     let sArr = s.split("")
//     const valid = [s[0]];
    
//     let left = 0;
    
//     for (let right = 1; right < s.length; right++) {
//         if (s[right] === ")" && valid[valid.length - 1] === "(") {
//             valid.pop();
//         } else if (s[right] === "]" && valid[valid.length - 1] === "[") {
//             valid.pop();
//         } else if (s[right] === "}" && valid[valid.length - 1] === "{") {
//             valid.pop();
//         } else {
//             valid.push(s[right]);
//         }
          
//     }
    
//     return valid.length === 0;
    const validChar = {
        ")": "(",
        "}": "{",
        "]": "["
    }
    
    const stack = [];
    
    
    for (let char of s) {
        // console.log(char)
        if (validChar[char]){
            const top = stack[stack.length - 1];
            if (stack.length > 0 && top === validChar[char]) {
                stack.pop()
            } else {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0
};