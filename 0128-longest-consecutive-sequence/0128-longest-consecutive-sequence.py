class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        nums_set = set(nums)
        longest_seq = 0
        
        
        for i in range(0, len(nums)):
            num = nums[i]
            prev = num - 1
            
            next_num = num + 1
            current_seq = 1
           
            if prev not in nums_set:
                while next_num in nums_set:
                    next_num += 1
                    current_seq += 1
            
                longest_seq = max(longest_seq, current_seq)
        
        
        return longest_seq