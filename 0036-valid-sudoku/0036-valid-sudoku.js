/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const rowSet = new Set(), colSet = new Set(), boxSet = new Set();
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            let row = board[i][j];
            let col = board[j][i];
            let box = board[3 * Math.floor(i/3) + Math.floor(j / 3)][((i * 3) % 9) + (j % 3)]
            if (row !== ".") {
                if (colSet.has(row)) return false;
                colSet.add(row);
            }
             if (col !== ".") {
                if (rowSet.has(col)) return false;
                rowSet.add(col);
            }
             if (box !== ".") {
                if (boxSet.has(box)) return false;
                boxSet.add(box);
            }
            // console.log("rowset", rowSet)
            // console.log("colset", colSet)
        }    
        rowSet.clear();
        colSet.clear();
        boxSet.clear();
    }
    return true;
};