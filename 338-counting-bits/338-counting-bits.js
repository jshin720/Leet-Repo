/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const count = [];
    let i = 0;
    while (i <= n) {
        count.push(i.toString(2))
        i++;
    }
    
    
   return count.map((num) => {
        let bitCount = 0;
        for (let i = 0; i < num.length; i++) {
           
            num[i] === '1' && bitCount++
        }
        return bitCount;
    })
    
};