/**
 * @param {string} s
 * @return {boolean}
 */
const vowelCount = (str) => {
    const vowels = "aeiouAEIOU";
    let count = 0;
    
    for (const char of str) {
        if (vowels.includes(char)) count++
    }
    return count;
    
}

var halvesAreAlike = function(s) {
    const mid = Math.floor(s.length / 2);
    let partA = s.slice(0, mid);
    let partB = s.slice(mid);
    console.log(partA, partB)
    if (partA.length !== partB.length) return false;
    
    if(vowelCount(partA) !== vowelCount(partB)) return false;
    
    return true;
};