/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let secs = 0;
    
    
    for (let i = 0; i < points.length - 1; i++) {
        let x = Math.abs(points[i][0] - points[i+1][0]);
        let y = Math.abs(points[i][1] - points[i+1][1]);
        
        secs += Math.max(x,y);
        
    }
    return secs;
};