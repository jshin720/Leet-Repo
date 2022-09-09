/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const fizzed = [];
    
    for (let i = 1; i <= n; i++) {
        if (i %  3 === 0  && i % 5 === 0) {
            fizzed.push("FizzBuzz");
        } else if (i % 5 === 0) {
            fizzed.push("Buzz"); 
        } else if(i % 3 === 0) {
            fizzed.push("Fizz")
        } else {
            fizzed.push(i.toString())
        }
    }
    return fizzed;
};