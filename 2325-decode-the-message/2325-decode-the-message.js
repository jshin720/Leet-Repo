/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
//     let alpha = "abcdefghijklmnopqrstuvwxyz".split("");
//     let newKeys = [... new Set( key.split(" ").join(""))];
//     let decodedMessage = "";
    
//     for (let i = 0; i < message.length; i++) {
//         let idx = newKeys.indexOf(message[i]);
//         if (idx !== -1) {
//             decodedMessage += alpha[idx];
//         } else {
//             decodedMessage += " "
//         }
        
//     }
//     return decodedMessage;
    const letters = `abcdefghijklmnopqrstuvwxyz`;
    const modKey = [...new Set(key.replaceAll(` `, ``).split(``))];
    
    const map = modKey.reduce((m, l, i) => (m[l] = letters[i], m), {});
  console.log(map)
    return message.split(``).map(w => w in map ? map[w] : w).join(``);
    
};