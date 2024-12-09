/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function(s) {
 let noSpaces = s.replace(/[^a-zA-Z0-9]/g, '').split(" ").join("");

 if (noSpaces.length === 0 || noSpaces === null) return true;

 let back = noSpaces.length - 1;

 for (let i = 0; i < noSpaces.length; i++) {
    // console.log(noSpaces[i], "forward")
    // console.log(noSpaces[back], "back")
    if (noSpaces[i].toLowerCase() !== noSpaces[back].toLowerCase()) return false;
    back--;
 }

  return true;
};

