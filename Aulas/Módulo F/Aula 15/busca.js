let num = [5, 8, 2, 9, 3]

console.log(num)

let pos = num.indexOf(8)

/*
console.log(`O valor 8 está na posição ${pos}`)
let outro = num.indexOf(4)
console.log(`O valor 4 não existe, pois o valor de retorno é ${outro}`)
*/


if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor está na posição ${pos}`)
}