/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
      var array = [];
    gain.unshift(0);
    var sum = 0;
    for(var i=0; i< gain.length-1; i++){
        sum = sum + gain[i+1];
        array.push(sum);
    }
    array.unshift(0);
    return Math.max(...array)
};