/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {
 
//     const largestSq = rectangles.map((rectangle) => Math.min(rectangle[0], rectangle[1]));                       
//     const maxSize = Math.max(...largestSq);
    
//     let count = 0;
    
//     for (let sq of largestSq) {
//         if(sq === maxSize) count++;
//     }
    
//     return count; 
    
    let maxSize = 0
    
    // size => count of size
    const map = new Map()
    for (const rectangle of rectangles.values()) {
        const [height, width] = rectangle
        const size = Math.min(height, width)
        map.set(size, 1 + (map.get(size) || 0))
        maxSize = Math.max(maxSize, size)
    }
    
    
    let result = map.get(maxSize)
    return result
};