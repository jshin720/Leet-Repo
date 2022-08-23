/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    return ((coordinates.charCodeAt(0) - 96) + Number(coordinates[1])) % 2 !== 0;
};