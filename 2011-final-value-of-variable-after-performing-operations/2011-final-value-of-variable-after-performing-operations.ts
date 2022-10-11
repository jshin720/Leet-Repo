function finalValueAfterOperations(operations: string[]): number {
    let x: number = 0;
    
    for (let op of operations) {
        // if (op.includes("+")) {
        //     x++;
        // } else {
        //     x--;
        // }
        
        op.startsWith("+") || op.endsWith("+") ? x++ : x--;
    }
    return x;
};