/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    let legs = {};
    
    
    for (let i = 0; i < paths.length; i++) {
        legs[paths[i][0]] = paths[i][1];
    }
   
    let start = paths[0][0];
    
   while(true) {
       if (legs[start]) {
           start = legs[start];
       } else {
            return start;
       }
   }
    
}; 