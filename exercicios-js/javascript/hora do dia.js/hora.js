function carregar() {
    var msg = window.document.getElementById('mensagem')
    var img = window.document.getElementById('ftmanhã')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = "Agora são " + hora + " horas."

    if (hora >= 6 && hora < 12) {
        msg.innerHTML += "BOM DIA!"
        /*Aqui a imagem mudaria tbm com o comando (img.scr="arquivo_de_imagem") mas como por aqui não tem como colocar imagens dentro da pasta não deu pra testar*/
        document.body.style.background = '#CCA866'
    } else if (hora >= 12 && hora <= 18) {
        msg.innerHTML += "BOA TARDE!"
        //img.src ="imagem tarde"
        document.body.style.background = '#41301E'
    } else {
        msg.innerHTML += "BOA NOITE!"
        //img.src ="imagemnoite"
        document.body.style.background = '#0B0A04'
    }
}