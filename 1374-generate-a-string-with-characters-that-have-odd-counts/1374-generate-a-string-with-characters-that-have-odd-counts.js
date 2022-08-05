/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
//    let str = "";
//     let i = 1;
    
//     if(n % 2 === 0) {
//         while(i <= n - 1) {
//             str += "u"
//             i++;
//         }   
//         str += "k"
//    }  else {
//       while(i <= n) {
//             str += "u"
//             i++;
//         }   
//    }
//     return str;
    
    return n % 2 === 0 ? "t".repeat(n - 1) + "p"  : "s".repeat(n)
};