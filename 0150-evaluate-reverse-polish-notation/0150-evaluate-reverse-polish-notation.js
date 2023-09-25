/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];

//     for (let char of tokens) {
//         if ( char === "+") {
//             stack.push(stack.pop() + stack.pop());
//         } else if ( char === "-"){
//             let num1 = stack.pop();
//             let num2 = stack.pop();
//             console.log("minus", num1, num2);
//             stack.push(-stack.pop() + stack.pop());
//         } else if ( char === "*") {
//             stack.push(stack.pop() * stack.pop());
//         } else if ( char === "/") {
//             console.log("1", 1/stack.pop())
//             console.log("2", stack.pop())
//             stack.push(Math.trunc(1/stack.pop()*stack.pop()));
//         } else {
//             stack.push(parseInt(char));
//         }
//         console.log(stack)
//     }
//     return stack[0];
    
    const operators = {
        "+" : (num1, num2) => num1 + num2,
        "-" : (num1, num2) => num1 - num2,
        "*" : (num1, num2) => num1 * num2,
        "/" : (num1, num2) => Math.trunc(num1 / num2)
    }
    
    for (let token of tokens) {
       
        if (operators[token]) {
            let num2 = stack.pop();
            let num1 = stack.pop();
            console.log(num1, num2)
            stack.push(operators[token](num1, num2));
        } else {
            stack.push(parseInt(token))
        }
        
    }
    console.log(stack)
    return stack.pop();
}; 