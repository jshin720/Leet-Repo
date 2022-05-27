/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let maxWords = 0;
    
    sentences.forEach((sentence) => {
        sentence.split(" ").length > maxWords ? maxWords = sentence.split(" ").length : maxWords;
    })
    return maxWords;
};