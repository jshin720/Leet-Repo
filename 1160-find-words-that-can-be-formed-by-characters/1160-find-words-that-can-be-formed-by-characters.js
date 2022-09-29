/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    
//     // let sum = 0;
    
//     const formed = words.filter((word) => {
//         for (let i = 0; i < word.length; i++) {
//             if (!chars.includes(word[i])) return false;
//         }
//         return true;        
//     }).map((word) => word.length);
    
//     console.log(formed)
    
//     const sum = formed.reduce((a, b) => a + b, 0);
    
    
    
//     // return sum; 
    
    const charMap = createMap(chars);
  let ret = 0;
  for (const word of words) {
    isGoodWord(word, charMap) && (ret += word.length);
  }
  return ret;
  
  function createMap(word) {
    const map = new Map();
    for (const ch of word) {
      const count = map.get(ch) || 0;
      map.set(ch, count + 1);
    }
    return map;
  }
  
  function isGoodWord(word, charMap) {
    const wordChars = createMap(word);
    for (const [key, value] of wordChars) {
      if (!charMap.has(key) || charMap.get(key) < value) {
        return false;
      }
    }
    return true;
  }
    
};