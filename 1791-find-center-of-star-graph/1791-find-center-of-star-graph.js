/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    let common = 0;
    
    for (let i = 0; i < edges.length; i++ ) {
        if (edges[i].includes(edges[0][0])){
            common = edges[0][0];
        } else if ( edges[i].includes(edges[0][1])) {
            common = edges[0][1];
        }
    }
    return common; 
};