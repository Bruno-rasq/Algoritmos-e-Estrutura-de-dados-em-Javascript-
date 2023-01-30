 //botoes e box de resposta.
 var conf = document.getElementById("confirmar")
 var resp = document.getElementById("res")
 
//variaveis de entrada.   
 let i = document.getElementById("ini")
 let a = document.getElementById("ate")

 conf.addEventListener("click", confirmar)

 function confirmar() {
     if (i.value.length == 0) {
         window.alert("erro!")
     } else if ((a.value) < (i.value)){
         window.alert("Erro! 2 ")
     }else{
         
         
         resp.innerText = " testando! " + (i.value) + "" + (a.value)
     }
 }