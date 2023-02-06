class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        window = set()
        
        
        for i in range(0, len(nums)):
            if nums[i] in window:
                    return True
            window.add(nums[i])
            
        return False