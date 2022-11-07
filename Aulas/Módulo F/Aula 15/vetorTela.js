let valores = [0, 2, 6, 1, 7, 9, 3]

/*
for(let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for (let pos in valores) {
    console.log(`A posição ${pos} tem o calor ${valores[pos]}`)
}