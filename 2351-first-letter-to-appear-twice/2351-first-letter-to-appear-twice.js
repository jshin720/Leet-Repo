/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let pairs = new Set();
    
    for (let char of s) {
        console.log(char)
        if(pairs.has(char)) return char;
        pairs.add(char);
    }
};