// =================== EVENTOS ======================

//por meio dos eventos podemos mapear algumas ações do usuário.
// como movimento do mouse, click, mouse entrando ou saindo de um elemento, carregamento da página e etc...

// são possiveis de swerem feitos com css, porém quando o evento fica complexo a melhor forma é com js.

//[OnLoad]
// o onload é ativado ao carregar a página

window.onload = function(){
    console.log("carregou o DOM");
    var title = document.querySelector("#title");
    console.log(title);
    
};

console.log("carregou o JS");


//[Onclick]
// o click é ativado quando o usuário clica em um elemento em que o evento foi atrelado

let btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    // console.log("click");
    console.log("click");

    btn.style.color = "red";
});

var title = document.querySelector("#title");

title.addEventListener("click", () => {
    document.body.style.background = "lightgray";
})

//[dblclick] //não funciona mais
// evento de duplo click 
btn.addEventListener("dblclick", () => {
    console.log("click duplo");
});


//[mouseover] e [mouseout]

var title = document.querySelector("#title");
console.log(title);

title.addEventListener("mouseover", () => {
    title.style.backgroundColor = "yellow";
});

 //obs: por algum motivo o evento mouseover está se comportando como click
 //quando o inspecionar está aberto

 title.addEventListener("mouseout", () => {
    title.style.backgroundColor = "white";
 });
