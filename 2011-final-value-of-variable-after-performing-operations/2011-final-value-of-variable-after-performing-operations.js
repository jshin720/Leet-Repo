/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let x = 0;
    
    operations.forEach((val) => {
        if ("++X" === val || "X++" === val) {
            ++x;
        } else if ("--X"=== val|| "X--" === val) {
            --x;
        };
    })
    return x;
};
