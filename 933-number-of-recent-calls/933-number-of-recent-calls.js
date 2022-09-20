
var RecentCounter = function() {
    this.recentCalls= [];
    
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
   this.recentCalls.push(t)
    
 while(this.recentCalls[0] < t - 3000) {
     this.recentCalls.shift();
 }
    
    return this.recentCalls.length;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */