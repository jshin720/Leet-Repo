/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function(lowLimit, highLimit) {
    const boxes = {};
    
    for (let balls = lowLimit; balls <= highLimit; balls++) {
        let sum = 0;
        const ballString = balls.toString(); 
        for (let i = 0; i < ballString.length; i++) {
            sum += +ballString[i];
         
        };
        !boxes[sum] ? boxes[sum] = 1 : boxes[sum]++;
        sum = 0;
        
    }
    
   return Math.max(...Object.values(boxes))
    
};