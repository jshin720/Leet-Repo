function shuffle(nums: number[], n: number): number[] {
    const shuffled: number[] = [];
    
    const xArr: number[] = nums.slice(0, n)
    const yArr: number[] = nums.slice(n);
    console.log(yArr);
    
    for (let i = 0; i < xArr.length; i++) {
        shuffled.push(xArr[i]);
        shuffled.push(yArr[i])
    }
    
    return shuffled;
};