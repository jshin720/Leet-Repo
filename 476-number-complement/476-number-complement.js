/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    // let index = 0;
    // let result = 0;
    // while (num) {
    //     num /= 2;
    //     result += !(num % 1) * 2 ** index++;
    //     num = Math.floor(num);
    // };
    // return result;
    let index = 0;
    let result = 0;
    while (num) {
        num /= 2;
        result += !(num % 1) * 2 ** index++;
        num = Math.floor(num);
    };
    return result;
};