class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        row = set()
        col = set()
        
        for r in range(0,len(matrix)):
            for c in range(0, len(matrix[r])):
                if matrix[r][c] == 0:
                    row.add(r)
                    col.add(c)
        
        for r in range(0,len(matrix)):
            for c in range(0, len(matrix[r])):
                if r in row or c in col:
                    matrix[r][c] = 0
        