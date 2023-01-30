var a = window.document.getElementById('botao')

a.addEventListener('click', clicar)
    function clicar () {
    caixa.style.background = "#A1FF00"
    caixa.innerText ="A"
}

var b = window.document.getElementById('bot')

b.addEventListener('click', base)
function base() {
    caixa.style.background ="#00DAFF"
    caixa.innerText ="B"
}

var c = window.document.getElementById('bot3')
c.addEventListener('click', reset)
function reset() {
    caixa.style.background ="#FFCE00"
    caixa.innerText ="caixa"
}
