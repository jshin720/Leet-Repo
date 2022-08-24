/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(items1, items2) {
    let map = {};
    for (let [value, weight] of items1.concat(items2)) {
        if (!map[value]) {
            map[value] = weight;
        } else {
            map[value] += weight;
        }
    }
    return Object.keys(map).sort((a, b) => a - b).map(key => [key, map[key]])
};