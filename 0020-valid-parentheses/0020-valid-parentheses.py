class Solution:
    def isValid(self, s: str) -> bool:
       
#         if len(s) == 0 or len(s) % 2 != 0:
#             return False
      
#         s_arr = list(s)
#         valid = [s_arr.pop(0)]
        
#         for i in s_arr:
           
#             if i == ")":
#                 if valid and valid[-1] == "(":
#                     valid.pop()
#                 else:
#                     return False
#             elif i == "}":
#                 if valid and valid[-1] == "{":
#                     valid.pop()
#                 else:
#                     return False
#             elif i == "]":
#                 if valid and valid[-1] == "[":
#                     valid.pop()
#                 else:
#                     return False
#             else:
#                 valid.append(i)
        
#         # print(valid)
        
#         return len(valid) == 0


        valid_char = {
            ")": "(",
            "}": "{",
            "]": "["
          }

        stack = list()
        
       
        for char in s:
            if char in valid_char:
                if len(stack) > 0 and stack[len(stack) - 1] == valid_char[char]:
                    stack.pop()
                else:
                    return False
            else:
                stack.append(char)
                
        
        return len(stack) == 0