function finalValueAfterOperations(operations: string[]): number {
    let x: number = 0;
    
    for (let op of operations) {
        if (op.includes("+")) {
            x++;
        } else {
            x--;
        }
    }
    return x;
};