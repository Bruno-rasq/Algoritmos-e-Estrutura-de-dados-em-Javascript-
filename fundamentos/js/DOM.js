// DOM - document object model =============== 

const title = document.getElementById("title");
console.log(title);

//getElementBYId -> pega o elemento pelo id
//getElelementByClassName -> pega o elemento pelo nome da classe
// getElementByTagname -> pega o elemento pelo nome da tag

//[querySelector]

//querySelector -> pega por id, class, tag etc..
//querySelectorAll -. pega todos os elementos com mesma classe, tag etc.. id tbm mas id é unico

const sametitle = document.querySelector("#title");
console.log(sametitle);

const texts = document.querySelectorAll(".text");
console.log(texts);

console.log(texts[2]);

texts.forEach((text) => {
    console.log(text.textContent.toUpperCase());
});

//manipulando o dom
title.textContent = "Mudei o titulo";

texts[0].innerHTML = '<span> alterando html do elemento </span>';

texts[1].style.backgroundColor = 'blue';
texts[1].style.color = 'white';

texts[3].classList.add("my-class"); // adiciona class
texts[3].classList.remove("my-class"); // remove class

texts[4].remove(); // excluiu um elemento

//eventos

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    console.log("clicou")
});