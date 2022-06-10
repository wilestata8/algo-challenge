/*
Write a function that returns the factorial of 
the provided integer(n). E.g
    factorial(5) // should return 120
*/
//parameters:
//return:
//examples:
//pseudocode:

function factorial(n) {
    if (n <= 1) {
        return 1
    }
    for (let i = n - 1; i >= 1; i--) {
        n *= i;
    }
    return n;
}

module.exports = factorial