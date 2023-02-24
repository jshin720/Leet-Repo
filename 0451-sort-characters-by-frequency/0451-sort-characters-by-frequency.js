/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const count = {};
    const bucketSort = new Array(27);
    let sortedStr = "";
    
    
    for (let char of s) {
        if (!count[char]) count[char] = 0;
        count[char]++;
    }
    
    for (let char in count) {
        const freq = count[char];
        
        if (!bucketSort[freq]) bucketSort[freq] = new Array();
        bucketSort[freq].push(char);
    }
    
    for (let i = bucketSort.length - 1; i >= 0; i--) {
        if (!bucketSort[i]) continue;
        for (let char of bucketSort[i]) {
            for (let j = 0; j < count[char]; j++) {
                sortedStr += char;
            }
        }
    }
    return sortedStr;
};