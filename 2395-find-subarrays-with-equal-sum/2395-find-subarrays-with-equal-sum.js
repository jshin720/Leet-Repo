/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function(nums) {
    const subSums = new Set() ;
    
    for (let i = 0; i < nums.length; i++) {
        
       
            
            let sum = nums[i] + nums[ i + 1];
            
            if (subSums.has(sum)) return true;
                subSums.add(sum);
        
    }

    return false;
    //  let s = new Set()
    // for(let i = 0; i<nums.length-1; i++){
    //     let sum = nums[i] + nums[i+1]
    //     if(s.has(sum)) return true
    //     s.add(sum)
    // }
    // return false
};