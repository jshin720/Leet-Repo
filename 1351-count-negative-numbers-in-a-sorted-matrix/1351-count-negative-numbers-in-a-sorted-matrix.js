/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
//     let count = 0;
//     console.log(grid.flat())
//     for (let i = 0; i < grid.length; i++) {
       
        // count += grid.flat.filter((num) => num < 0).length;
    // }
    return grid.flat().filter((num) => num < 0).length;
};