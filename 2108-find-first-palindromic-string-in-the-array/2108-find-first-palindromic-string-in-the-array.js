/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
for (let i = 0; i < words.length; i ++) {
    const word = words[i]
    if (isPalindrome(word)) return word
  }
  return ''
}

const isPalindrome = (word) => {
  for (let i = 0; i < word.length / 2 + 1; i ++) {
    if (word[i] !== word[word.length - 1 - i]) {
      return false
    }
  }
  return true
}