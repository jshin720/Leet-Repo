/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    const selfNums = [];
    
    const isSelfDividing = (num) => {
        let strNum = num.toString();
        
        for (let i = 0; i < strNum.length; i++) {
            let interNum = Number(strNum[i]);
           if (num % Number(interNum) !== 0  || interNum === 0) {
               return false;
           } 
        }
        return true;
    }
    
    for (let i = left; i <= right; i++) {
        if (isSelfDividing(i)){
            selfNums.push(Number(i))       
        }
    }
    return selfNums;
};