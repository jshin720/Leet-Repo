/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function(num) {
    const count = {};
    
    for (let ele of num) {
        if (!count[ele]) {
            count[ele] = 1;
        } else {
            count[ele]++;
        }
    }
     
    for(let j=0;j<num.length;j++){
        if(count[j]==undefined){
            if(num[j]!= 0){
                return false;
            }
        } else if(count[j] != num[j]){

        return false;
        }
    }
return true;
};