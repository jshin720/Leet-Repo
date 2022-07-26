/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let words = s.split(" ")
    const revWords = words.map((word) => word.split("").reverse().join(""));
    return revWords.join(" ")
};