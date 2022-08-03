/**
 * @param {number} n
 */
var OrderedStream = function(n) {
    this.n = n;
    this.pointer = 1;
    this.temp = {};
    
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    let chunk = [];
    // console.log(this.temp)
    this.temp[idKey] = value; // inserts the idkey and value into the obj
       // console.log(chunk)      
    while(this.temp[this.pointer]) { // while this.temp[this.pointer] === defined ---- will not run if it is undefined
        chunk.push(this.temp[this.pointer]); // pushes in the value into chunk arr
        this.pointer++;
    }

 // console.log(chunk)    
// if the loop does run then returns an empty arr
    return chunk;
// reason for null is because pointer starts at 1. and second element an [] because of line 27
};
/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */