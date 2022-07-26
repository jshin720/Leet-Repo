/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
    const ringsHolder = {};
    let count = 0;
    
    for (let i = 0; i < rings.length - 1; i += 2) {
        if (ringsHolder[rings[i + 1]]) {
            ringsHolder[rings[i + 1]] += rings[i]; 
        } else {
            ringsHolder[rings[i + 1]] = rings[i]
        }
    }
   
     for (let item in ringsHolder) {
         if (ringsHolder[item].includes("R") && ringsHolder[item].includes("G") && ringsHolder[item].includes("B") ) {
              count++;
          }
     }
    return count;
};