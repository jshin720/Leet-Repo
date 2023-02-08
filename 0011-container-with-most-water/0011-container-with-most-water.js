/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let most = 0;
    let left = 0;
    let right = height.length - 1;
    
    while (left < right) {
        const shorter = Math.min(height[right], height[left])
        const area = (right - left) * shorter;
        if (area > most) most = area;
        
        height[left] >= height[right] ? right-- : left++
    }
    
   
    
    return most
};