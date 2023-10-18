/**
 * @param {string} s
 * @return {boolean}
 */

const alphaNum = (char) => (
     char.toLowerCase() >= "a" && char.toLowerCase() <= "z" || char >= "0" && char <= "9"
)
   


var isPalindrome = function(s) {
    
    let begin = 0, end = s.length - 1;
    
    while(begin < end) {
       
        if (!alphaNum(s[begin])) {
            begin++
            continue
        }
        if(!alphaNum(s[end])) {
            end--
            continue;
        }
         // console.log(s[begin], s[end])
        if (s[begin].toLowerCase() !== s[end].toLowerCase()) return false;
        begin++;
        end--;
    }   
    return true; 
};

