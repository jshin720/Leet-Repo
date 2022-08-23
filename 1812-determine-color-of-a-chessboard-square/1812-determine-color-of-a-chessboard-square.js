/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    return ((coordinates[0].charCodeAt() - 96) + Number(coordinates[1])) % 2 !== 0;
};