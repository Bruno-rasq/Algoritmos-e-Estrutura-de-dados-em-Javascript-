function somar() {
            
    var tn1= window.document.getElementById('numero1')
    var tn2= window.document.getElementById('numero2')
    var res = window.document.getElementById('res')

    var num1 = Number(tn1.value)
    var num2 = Number(tn2.value)
    var som = num1 + num2
    
    res.innerHTML = 'o resultado da soma de ' + num1 + '+' +num2+' é igual a:  ' + som
}