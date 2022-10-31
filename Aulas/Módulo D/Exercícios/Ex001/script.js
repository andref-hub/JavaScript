function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
   // var hora = 2
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'imagens/manhã_café.png'
        document.body.style.background = '#ffe6d0'
    } else if (hora >=12 && hora < 18) {
        // BOA TARDE!
        img.src = 'imagens/tarde_sol.png'
        document.body.style.background = '#ffa70e'
    } else {
        // BOA NOITE!
        img.src = 'imagens/noite_montanha.png'
        document.body.style.background = '#263c43'
    }
}
