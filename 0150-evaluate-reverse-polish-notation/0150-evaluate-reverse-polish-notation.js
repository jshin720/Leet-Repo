/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];

    for (let char of tokens) {
        if ( char === "+") {
            stack.push(stack.pop() + stack.pop());
        } else if ( char === "-"){
            stack.push(-stack.pop()+stack.pop());
        } else if ( char === "*") {
            stack.push(stack.pop() * stack.pop());
        } else if ( char === "/") {
            stack.push(Math.trunc(1/stack.pop()*stack.pop()));
        } else {
            stack.push(parseInt(char));
        }
        console.log(stack)
    }
    return stack[0];
};