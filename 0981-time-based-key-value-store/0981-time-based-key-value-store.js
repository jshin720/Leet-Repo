
var TimeMap = function() {
    this.stamped = {};
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    const stamped = this.stamped;

    if (stamped[key] === undefined) {
        stamped[key] = []
    } 
        stamped[key].push([value, timestamp]);

    // console.log(stamped) 
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    let res = '';
    const stampedTime = this.stamped[key] || [];

    let left = 0;
    let right = stampedTime.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (stampedTime[mid][1] <= timestamp) {
            res = stampedTime[mid][0]
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return res;
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */