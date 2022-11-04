function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert("Por favor digite um número!")
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option') //criação do option no js ao invés de um por um no html
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item) // Cria um elemento filho para o select - "cada valor gerado no contador vira um filho"
            c++
        }
    }
}