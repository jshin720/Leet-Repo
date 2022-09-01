/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    let isEqual = {};
    
    for (let num of target) {
        !isEqual[num] ? isEqual[num] = 1 : isEqual[num]++;    
    };
    console.log(isEqual)
    for (let num of arr) {
        if (!isEqual[num]) {
            return false;
        } else {
            isEqual[num]--;
        } 
        
        if (isEqual[num] === 0) delete isEqual[num];
       
    };
    
    return true;
};