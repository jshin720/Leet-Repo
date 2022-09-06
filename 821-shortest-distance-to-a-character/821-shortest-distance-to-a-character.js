/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
const shortest = (num, idxArr) => {
    const min = Math.min(...idxArr.map((idx) => Math.abs(idx - num)))
  return min;
}


var shortestToChar = function(s, c) {
    const answer = [];
    const cIdx = [];
    
    for (let i in s) {
       if (s[i] === c) cIdx.push(i);
    } 

    for (let j in s) {
        let minNum = shortest(j, cIdx);
        answer.push(minNum)
    }
    return answer;
};