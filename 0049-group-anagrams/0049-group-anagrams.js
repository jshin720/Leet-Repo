/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const grouped = {};
  
    
    for (let word of strs) {
        let sorted = word.split("").sort().join("");
        
        if (!grouped[sorted]) {
            grouped[sorted] = [word];
        } else {
            grouped[sorted].push(word);
        }
        
    }
  return Object.values(grouped)   
}