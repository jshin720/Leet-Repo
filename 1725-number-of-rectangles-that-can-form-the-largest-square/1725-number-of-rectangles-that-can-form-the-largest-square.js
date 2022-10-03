/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {
 
    
    const largestSq = rectangles.map((rectangle) => Math.min(rectangle[0], rectangle[1]));
                               
    const maxSize = Math.max(...largestSq);
    
    let count = 0;
    
    for (let sq of largestSq) {
        if(sq === maxSize) count++;
    }
    return count; 
};