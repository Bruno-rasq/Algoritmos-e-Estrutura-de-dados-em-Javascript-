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