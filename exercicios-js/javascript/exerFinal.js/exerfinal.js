
        let num = document.getElementById("fnum")
        let lista = document.getElementById("flista")
        let res = document.getElementById("res")

        let valores = []


        function isnumero(n) {
            if (Number(n) >= 1 && Number(n) <= 100) {
                return true
            } else {
                return false
            }
        }

        function inlista(n, l) {
            if (l.indexOf(Number(n)) != -1) {
                return true
            } else {
                return false
            }
        }



        function adicionar() {
            if (isnumero(num.value) && !inlista(num.value, valores)) {
                valores.push(Number(num.value))


                /* metodo para inserir valores dentro da tag select*/
                let item = document.createElement('option')
                item.text = "valor " +(num.value) + " adicionado."
                lista.appendChild(item)
                res.innerHTML = ""

            } else {
                window.alert("valores não compativeis ou já adicionados")
            }


            /*comando para assim que um valor for inserido ele reseta a caixa com o valor numerico*/
            num.value = ''
            num.focus()
        }


        function finalizar() {
            if (valores.length == 0) {
                window.alert("[Erro!] - Adicione valores antes de finalizar!")
            } else {

                /* variavel tot iria receber o tamanho do array valores, quantidade de valores add*/
                let tot = valores.length


                /* o comando Math.max ou .min é uma forma mais simples de encontrar os maiores e menores valores de um array*/
                let max = Math.max(...valores)
                let min = Math.min(...valores)

                let soma = 0;
                let media = 0;



                /* laço de repetição tipo For-in para somar os valores do array*/
                for (let pos in valores) {
                    soma += valores[pos]
                }


                media = soma / tot


                //Area de respostas
                res.innerHTML = ""

                res.innerHTML += "<p>Foram adicionados, " + tot+ " elementos</p>"

                res.innerHTML += "<p>maior valor = " + max+ "</p>"

                res.innerHTML += "<p>menor valor = " + min+ "</p>"

                res.innerHTML += "<p>soma de todos os valores = " + soma+ "</p>"

                res.innerHTML += "<p>media = " + media+ "</p>"
            }
        }