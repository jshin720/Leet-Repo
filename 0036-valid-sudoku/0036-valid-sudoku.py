class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        rows = {}
        cols = {}
        box = {}
        
        
        for r in range(0, len(board)):
            for c in range(0, len(board[r])):
                current_val = board[r][c]
                
                if current_val == ".":
                    continue
                box_coord = f"{math.floor(r/3)}, {math.floor(c/3)}"
                
                if r not in rows:
                    rows[r] = set()
                if c not in cols:
                    cols[c] = set()
                if box_coord not in box:
                    box[box_coord] = set()
                    
                if current_val in rows[r] or current_val in cols[c] or current_val in box[box_coord]:
                    return False
                
                rows[r].add(current_val)
                cols[c].add(current_val)
                box[box_coord].add(current_val)
        
        return True