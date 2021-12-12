function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
} 

function divide(a, b) {
    return a / b
}

function increment(n){
    n++
    return n
}

function decrement(n) {
    n--
    return n
}

function makeInt(n) {
    n = parseInt(n)
    if(n === 0x2328){
        return 0
    }
    return n
}

function preserveDecimal(n){
    n = parseFloat(n)
    return n
}