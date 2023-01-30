function tabuada() {
    // 
    let num = document.getElementById("ini")
    let tab = document.getElementById("res")

    if (num.value.length == 0) {
        window.alert("[Erro!] Digite um valor por favor.")
    } else {
        let n = Number(num.value)
        tab.innerHTML = " "
        
        for(let c = 1; c <= 10; c++)
        
        tab.innerHTML += n + "x"+ c + "=" + (n*c) +";   "
        
    }

}