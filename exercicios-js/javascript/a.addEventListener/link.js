var a = window.document.getElementById('area')
       
a.addEventListener('click', clicar)
a.addEventListener('mouseout', mover)

function clicar() {
    a.style.background = '#FF7000'
    a.innerText = 'Clicou!'
}

function mover() {
    a.style.background = '#00ECFF'
    a.innerText = 'funcionou!'
}