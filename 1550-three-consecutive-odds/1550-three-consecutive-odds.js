/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
//     for (let i = 2; i < arr.length; i++) {
//         if (arr[i] & 1 && arr[i - 1] & 1 && arr[i - 2] & 1) {
//             return true;
//         }
//     }

//     return false;
     for (i = 0; i < arr.length - 2; i++) {
        if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0 && arr[i + 2] % 2 !== 0) {
            return true;
        }
    }

    return false;
};