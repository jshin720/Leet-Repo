/**
 * @param {string} s
 * @return {string}
 */
const stringFreq = function(s) {
    let freq = {};
    
    for (let char of s) {
        !freq[char] ? freq[char] = 1 : freq[char]++;
    };
    return freq;
}

var sortString = function(s) {
    let result = [];
    let freq = stringFreq(s);
    // let keys= Object.keys(freq).sort((a, b) => a.localeCompare(b));
    let count = s.length; 
    console.log(count)
    
    while (count > 0) {
//         keys.forEach((key) => {
//             result.push(key);
//             freq[key]--;
//             if(freq[key] === 0) delete freq[key];
//             count--;
//             console.log("forward",count)
            
//         });
//            console.log("between", count)
//         for (let i = keys.length - 1; i >= 0; i--){
//             result.push(keys[i]);
//             freq[keys[i]]--;
//             if(freq[keys[i]] === 0) delete freq[keys[i]];
           
//             console.log("reverse",count)
//         };
        let keys = Object.keys(freq).sort((a, b) => a.localeCompare(b))
    keys.forEach((key) => {
      result.push(key)
      freq[key] -= 1
      if (freq[key] === 0) {
        delete freq[key]
      }
      count--
    })
    keys = Object.keys(freq).sort((a, b) => b.localeCompare(a))
    keys.forEach((key) => {
      result.push(key)
      freq[key] -= 1
      if (freq[key] === 0) {
        delete freq[key]
      }
      count--
    })
    
    }
    return result.join("");
};