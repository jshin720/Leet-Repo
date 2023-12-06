/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;
    
    while (left < right) {
        let waterHeight = Math.min(height[left], height[right]);
        let currArea = (right - left) * waterHeight;
        
        if (height[left] <= height[right]) {
            left++;
        } else {
            right--;
        }
        maxArea = Math.max(currArea, maxArea)
        // console.log(maxArea)
    }
    return maxArea
};