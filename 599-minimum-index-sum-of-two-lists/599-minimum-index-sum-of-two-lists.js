/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    const indices = {};
    
    for (let i in list1) {
        let idx = list2.indexOf(list1[i]);
        if (idx !== -1) indices[list1[i]] = Number(i) + idx;
    }
    
    const min =  Math.min(...Object.values(indices));
    
    
    const minIndex = [];
    
    for (let word in indices) {
        if (indices[word] === min) minIndex.push(word);
    }
    
    return minIndex;
};

