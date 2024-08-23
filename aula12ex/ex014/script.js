function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var hora = 17
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'fotomanha.png'
        document.body.style.background = '#db8983'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'fototarde.png'
        document.body.style.background = '#974525'
    } else {
        // BOA NOITE!
        img.scr = 'fotonoite.png'
        document.body.style.background = '#0b181e'
    }
        
}