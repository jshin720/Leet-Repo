/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
   if(n === 0) return 0;
   if(n === 1) return 1;
    
    const fibArr = [0, 1];
    
    while (n > 1) {
        let lastNum = fibArr[fibArr.length - 1];
        let secNum = fibArr[fibArr.length - 2];
        
        fibArr.push(lastNum + secNum);
        n--;
        
    }
    return fibArr.pop()
    
    // return fib(n -  1) + fib(n - 2);
};