/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    const common = words[0].split("").filter((char) => {
        console.log("char", char)
        for (let i = 1; i < words.length; i++) {
            console.log("words", words[i], i)
            if (!words[i].includes(char)){
                return false;
            } else {
                words[i] = words[i].replace(char, "");
            }
            // console.log("after", i)
        }
        return true;
       
    })
     return common
};