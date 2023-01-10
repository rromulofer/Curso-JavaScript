function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()

    //utilizando o var hora =  para realizar testes
    //para automatizar basta tirar o comentário do data.getHours()
    //e comentar a linha abaixo
    var hora = 15

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        // Manha
        img.src = ('manha.png')
    } else if (hora >= 12 && hora <= 18) {
        // Tarde
        img.src = ('tarde.png')
    } else {
        // Noite
        img.src = ('noite.png')
    }
}