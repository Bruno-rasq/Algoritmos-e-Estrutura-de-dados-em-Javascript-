var verfi = document. getElementById('click')

        function verificar() {
            let data = new Date()
            let ano = data.getFullYear()
            let rano = document.getElementById('nasc')
            let resp = document.getElementById("res")
            let idade = ano - Number(rano.value)
            if (rano.value.length == 0 || Number(rano.value) > ano) {
                window.alert("Erro")
            } else {
                let sexo = document.getElementsByName("sex")
                let genero = ""
                if (sexo[0].checked) {
                    genero = " masculino"
                } else {
                    genero = " Feminino"
                }

                resp.innerHTML = "você tem " + idade + " anos de idade e é do sexo: " + genero
            }
        }