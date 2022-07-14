/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let alpha = "abcdefghijklmnopqrstuvwxyz".split("");
    
    for (let i = 0; i < alpha.length; i++) {
        if (!sentence.includes(alpha[i])) return false;
    }
    return true;
};