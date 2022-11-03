function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] - Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gen = 'Pessoa de gênero Masculino'
            if (idade >= 0 && idade < 10) {
                // CRIANÇA
                img.setAttribute('src', 'imagens/bebeM.png')
            } else if (idade < 21) {
                // JOVEM
                img.setAttribute('src', 'imagens/jovemM.png')
            } else if (idade > 21 && idade < 60) {
                // ADULTO
                img.setAttribute('src', 'imagens/adultoM.png')
            } else {
                // IDOSO
                img.setAttribute('src', 'imagens/idosoM.png')
            }
        } else if (fsex[1].checked) {
            gen = 'Pessoa de gênero Feminino'
            if (idade >= 0 && idade < 10) {
                // CRIANÇA
                img.setAttribute('src', 'imagens/bebeF.png')
            } else if (idade < 21) {
                // JOVEM
                img.setAttribute('src', 'imagens/jovemF.png')
            } else if (idade > 21 && idade < 60) {
                // ADULTO
                img.setAttribute('src', 'imagens/adultoF.png')
            } else {
                // IDOSO
                img.setAttribute('src', 'imagens/idosoF.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `${gen} com ${idade} anos.`
        res.appendChild(img)
    }
}
