class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        words = s.strip()
        words_list = words.split()
        
        return len(words_list[len(words_list) - 1])