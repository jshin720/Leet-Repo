/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let x = 0;
    let y = 0;
    
    for (let move of moves) {
        if (move == "R") {
            x++;
        }
        if (move == "L") {
            x--;
        }
        if (move == "D") {
            y--;
        }
        if (move == "U") {
            y++;
        }        
    }
    
    return x == 0 && y == 0;
};