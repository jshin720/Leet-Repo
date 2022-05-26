/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let richest = 0;
    
    accounts.forEach((account) => {
        let total = account.reduce((partialSum, a) => partialSum + a, 0);
        total >= richest ? richest = total : richest;
    })
    return richest;
};