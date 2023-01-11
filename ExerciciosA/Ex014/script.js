

function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()

    //utilizando o var hora =  para realizar testes
    //para automatizar basta tirar o comentário do data.getHours()
    //e comentar a linha abaixo
    var hora = 8

    if (hora >= 0 && hora < 12) {
        // Manha
        msg.innerHTML = `Bom dia, agora são ${hora} horas`
        img.src = ('manha.png')
        document.body.style.background = "#EEDD82"
    } else if (hora >= 12 && hora <= 18) {
        // Tarde
        msg.innerHTML = `Boa tarde, agora são ${hora} horas`
        img.src = ('tarde.png')
        document.body.style.background = "#D2691E"
    } else {
        // Noite
        msg.innerHTML = `Boa noite, agora são ${hora} horas`
        img.src = ('noite.png')
        document.body.style.background = "#104E8B"
    }
}