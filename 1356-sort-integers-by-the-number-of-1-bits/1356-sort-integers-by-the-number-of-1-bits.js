/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    const binaryCount = binaryObj(arr);
    console.log(binaryCount)
   let flag = false;
    
    while (!flag) {
        flag = true;
        
        for (let i = 0; i < arr.length - 1; i++) {
            let temp = arr[i]
             // console.log(arr);
            if (binaryCount[arr[i]] > binaryCount[arr[i + 1]]) {
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                flag = false;
            } else if (binaryCount[arr[i]] === binaryCount[arr[i + 1]]) {
                if (arr[i + 1] < arr[i]) {
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                    flag = false;
                }
            }
        }
    }
    return arr;
};

const binaryObj = (arr) => {
    const bits = {};
    
    for (let num of arr) {
        bits[num] = onesCount(num.toString(2));
        
    }
    return bits;
}

const onesCount = (nums) => {
    let count = 0;
    
    for (let num of nums) {
        +num === 1 && count++;
    }
    return count
}