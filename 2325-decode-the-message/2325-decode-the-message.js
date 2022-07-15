/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    let alpha = "abcdefghijklmnopqrstuvwxyz".split("");
    let newKey = key.split(" ").join("");
    let uniqueKeys = [... new Set(newKey)];
    let decodedMessage = "";
    
    for (let i = 0; i < message.length; i++) {
        let idx = uniqueKeys.indexOf(message[i]);
        if (idx !== -1) {
            decodedMessage += alpha[idx];
        } else {
            decodedMessage += " "
        }
        
    }
    return decodedMessage;
    
};