/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let parts = address.split("");
    let defanged = [];
    
    parts.forEach((part) => {
      part === '.'? defanged.push("[.]") : defanged.push(part);  
    })
    return defanged.join("")
};