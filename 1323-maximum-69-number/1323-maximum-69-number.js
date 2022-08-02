/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let numsArr = num.toString().split("");
  
    
    for (let i = 0; i < numsArr.length; i++) {
        if (numsArr[i] === "6") {
            numsArr[i] = "9"
            return Number(numsArr.join(""));
          } 
        
    }
    return Number(numsArr.join(""));
    
};