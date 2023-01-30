let verif = document.getElementById("verificar")
        let resp = document.getElementById("res")
        
        verif.addEventListener('click', clicar)
        
        function clicar() {
            let sexo = document.getElementsByName("sex")
            let genero = ""
            if (sexo[0].checked){
                genero = " masculino"
            } else {
                genero = " Feminino"
            }
            resp.innerHTML = "seu genero é:" + genero
            
        }