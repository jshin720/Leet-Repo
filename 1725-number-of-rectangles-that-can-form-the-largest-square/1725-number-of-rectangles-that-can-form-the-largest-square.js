/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {
      let arr = []
  let count = 0;
  let max = 0;
  let i = 0;
  rectangles.forEach(e => {
    arr.push(Math.min(e[0], e[1]));
    if (arr[i]> max){
      max = arr[i]
      count = 1;
    } else if (arr[i]===max){
      count ++;
    }
    i++;
  });
  return count;
};