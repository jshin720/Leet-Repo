/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let curr = 0, next = 1;
     
    while(true) {
        yield curr;
        
        [curr, next] = [next, curr + next];
    }
    
    return fib;
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */