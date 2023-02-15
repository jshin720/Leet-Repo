/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rows = {};
    let cols = {};
    let box = {};

    
    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[r].length; c++) {
            let currentVal = board[r][c];
            
            if (currentVal === ".") continue;
            
            // because the boxes are in a 3x3 grid
            let boxCoord = `${Math.floor(r/3)},${Math.floor(c/3)}`;
            
            if(!rows[r]) rows[r] = new Set();
            if(!cols[c]) cols[c] = new Set();
            if (!box[boxCoord]) box[boxCoord] = new Set();
            
            if (rows[r].has(currentVal) || cols[c].has(currentVal) || box[boxCoord].has(currentVal)) return false;
            
            rows[r].add(currentVal);
            cols[c].add(currentVal);
            box[boxCoord].add(currentVal)
        }
    }
    
    return true;
};