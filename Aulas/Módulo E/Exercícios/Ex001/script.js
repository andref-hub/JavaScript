function contar() {
   let ini = document.getElementById('txti')
   let fim = document.getElementById('txtf')
   let passo = document.getElementById('txtp')
   let res = document.getElementById('res')
   
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] Faltam dados! Por favor confira as informações fornecidas')
    } else {
        res.innerHTML = 'Contando...'
       
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p == 0) {
            window.alert('Passo inválido! Considerando [PASSO = 1] e contando:')
            p = 1
        }

        if (i < f){   // contagem crescente
            for(let c =1; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            } 
        } else { // contagem decrescente
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F448}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
