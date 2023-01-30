function confirmar() {

    //variaveis de entrada.
    let ini = document.getElementById("ini")
    let ate = document.getElementById("ate")
    let pass = document.getElementById("pass")

    //variavel da box de resposta.
    let res = document.getElementById("res")

    /*condição, para caso nenhum valor seja digitado.*/
    if (ini.value.length == 0 || ate.value.length == 0 || pass.value.length == 0) {
        window.alert("[ERRO!] - Verifique a inserção de dados e tente novamente.")
    } else {
        res.innerHTML += "contando.."

        //variaveis para conversão de valores.
        let i = Number(ini.value)
        let a = Number(ate.value)
        let p = Number(pass.value)

        if (i < a) {
            for (let c = i; c <= a; c += p) {
                res.innerHTML += c + ", "

            }

        } else {
            for (let c = i; c >= a; c -= p) {
                res.innerHTML += c + ", "
            }
        }
    }
    res.innerHTML += "Final."
}