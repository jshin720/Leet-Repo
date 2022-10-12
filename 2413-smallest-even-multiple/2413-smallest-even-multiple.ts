function smallestEvenMultiple(n: number): number {
    for (let i = n; true ; i++) {
        if (i % n === 0 && i % 2 === 0) return i
    }
};