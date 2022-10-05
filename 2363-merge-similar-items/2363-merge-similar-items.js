/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(items1, items2) {
    const similar = {};
    const items = items1.concat(items2)
    for (let i = 0; i < items.length; i++) {
        const [v, w] = items[i];
        
        if (!similar[v]) {
            similar[v] = w;
        } else {
            similar[v] += w;
        }
    }
    
//     for (let i = 0; i < items2.length; i++) {
//         const [v, w] = items2[i];
        
//         if (!similar[v]) {
//             similar[v] = w;
//         } else {
//             similar[v] += w;
//         }
//     }
   
    return Object.entries(similar);
};