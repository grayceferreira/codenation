'use strict'

const fibonacci = () => {
    let fib = [0, 1];
    for(let i = 2; i <= 350; i++){
        fib.push(fib[i-1] + fib[i-2]);
    }

    return fib;
}

const fib = fibonacci();

const isFibonnaci = (num) => {
    return fib.includes(num)
}

console.log(isFibonnaci(3));


module.exports = {
    fibonacci,
    isFibonnaci
}