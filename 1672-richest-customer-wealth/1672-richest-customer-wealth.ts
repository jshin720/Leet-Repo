function maximumWealth(accounts: number[][]): number {
    const totalWealth: number[] = [];
    
    for (let i = 0; i < accounts.length; i++) {
        let sum = accounts[i].reduce((a, b) => a + b);
        
        totalWealth.push(sum);
    }
    
    return Math.max(...totalWealth);
};