/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    const record = [];
    
    for (const i in ops) {
      if (ops[i] === "C" ) {
          record.pop();
      }  else if (ops[i] === "D") {
         record.push(record[record.length - 1] * 2);
      } else if (ops[i] === "+") {
          record.push(record[record.length - 1] + record[record.length -2]);
      } else {
          record.push(+ops[i]);
      }
    }
    
    return record.reduce((a, b) => a + b, 0);
};