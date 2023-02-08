class Solution:
    def isValid(self, s: str) -> bool:
       
        if len(s) == 0 or len(s) % 2 != 0:
            return False
      
        s_arr = list(s)
        valid = [s_arr.pop(0)]
        
        for i in s_arr:
           
            if i == ")":
                if valid and valid[-1] == "(":
                    valid.pop()
                else:
                    return False
            elif i == "}":
                if valid and valid[-1] == "{":
                    valid.pop()
                else:
                    return False
            elif i == "]":
                if valid and valid[-1] == "[":
                    valid.pop()
                else:
                    return False
            else:
                valid.append(i)
        
        # print(valid)
        
        return len(valid) == 0