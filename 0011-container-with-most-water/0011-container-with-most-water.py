class Solution:
    def maxArea(self, height: List[int]) -> int:
        max_water = 0
        left = 0
        right = len(height) - 1
        
        while left < right:
            shorter = min(height[right], height[left])
            area = (right - left) * shorter
            
            if area > max_water:
                max_water = area
                
            if height[left] >= height[right]:
               right -= 1
            else:
                left += 1
                

        return max_water