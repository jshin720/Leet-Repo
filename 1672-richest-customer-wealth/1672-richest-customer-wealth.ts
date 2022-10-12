function maximumWealth(accounts: number[][]): number {
    // const totalWealth: number[] = [];
    let max: number = 0;
    
    for (let i = 0; i < accounts.length; i++) {
        let sum = accounts[i].reduce((a, b) => a + b);
        
        // totalWealth.push(sum);
        max = Math.max(max, sum);
    }
    
//     return Math.max(...totalWealth);
    return max;
};