/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const ans = new Array(temperatures.length).fill(0);
    const stack = [];
    
    for (let i = 0; i < temperatures.length; i++) {
        let currTemp = temperatures[i];
        // console.log(stack[stack.length - 1])
        while (stack.length > 0 && currTemp > stack[stack.length - 1][0]) {
            [temp, idx] = stack.pop();
            // console.log("temp", temp)
            // console.log("idx", idx)
            ans[idx] = i - idx; 
        }
        stack.push([currTemp, i]);
    }
    return ans;
};