/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
//     boxTypes.sort((a, b) => b[1] - a[1]);
//     let total = 0;
    
//     for (let i = 0; i < boxTypes.length; i++) {
//         let num = boxTypes[i][0];
//         let units = boxTypes[i][1];
        
//         if (num <= truckSize) {
//             total += num * units;
//             truckSize -= num;
//         } else {
//             total += truckSize * units;
//             truckSize = 0;
//         }
        
//     }
    
//     return total;
    
    
    boxTypes.sort ((a, b) => b[1] - a[1]);
    let total = 0;
    // console.log(boxTypes)
    
    for (let boxType of boxTypes) {
        // console.log(boxType)
        
        const numBoxes = boxType[0];
        const unit = boxType[1];
        console.log("truckSize", truckSize)
        if (numBoxes <= truckSize) {
            total += numBoxes * unit;
            truckSize -= numBoxes;
        } else {
            total += truckSize * unit;
            truckSize = 0;
        }
        console.log(total)
    } 
    return total;
};