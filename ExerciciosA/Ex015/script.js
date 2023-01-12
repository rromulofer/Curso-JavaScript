function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'hcrianca.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'hjovem.jpg')
            } else if (idade < 29) {
                //adulto
                img.setAttribute('src', 'hadulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'hidoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'mcrianca.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'mjovem.jpg')
            } else if (idade < 29) {
                //adulto
                img.setAttribute('src', 'madulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'midoso.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}