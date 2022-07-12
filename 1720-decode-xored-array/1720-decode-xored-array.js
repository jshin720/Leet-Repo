/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
    let xored = [first];
    
    for (let i = 0; i < encoded.length; i++) {
        xored[i + 1] = xored[i] ^ encoded[i]
    }
    return xored;
};