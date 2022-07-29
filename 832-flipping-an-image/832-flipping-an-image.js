/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    let flipped = [];
    
    for (let i = 0; i < image.length; i++) {
        const rev = image[i].reverse();
        let inverted = [];
        for (let j = 0; j < rev.length; j++) {
            rev[j] === 1 ? inverted.push(0) : inverted.push(1); 
        }
        flipped.push(inverted);
    }
    return flipped; 
};