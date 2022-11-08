// RECURSIVIDADE:

function fatorial (n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(3))

/*
n! = n x (n-1)
1! = 1
*/