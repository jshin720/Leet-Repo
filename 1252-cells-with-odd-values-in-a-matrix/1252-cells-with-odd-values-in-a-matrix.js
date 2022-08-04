/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(m, n, indices) {
var mat = [];
    let count = 0;
    for (let i = 0; i < m; ++i) mat[i] = new Uint8Array(n);
        for (let i = 0; i < indices.length; ++i) {
            const [r, c] = indices[i];
            for (let j = 0; j < n; ++j) ++mat[r][j];
            for (let j = 0; j < m; ++j) ++mat[j][c];
        }

        for (let i = 0; i < m; ++i) {
            for (let j = 0; j < n; ++j) {
                 if (mat[i][j] % 2 === 1) ++count;
            }
    }
    return count;
};