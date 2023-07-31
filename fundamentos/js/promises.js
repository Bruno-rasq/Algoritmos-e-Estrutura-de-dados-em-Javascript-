// ========================= PROMISES ===========================

// são como promessas da vida real, ela está esperando algum retorno

// para criar uma promessa instanciamos a classe promise
// que leva dois argumentos resolve(solução) e reject(erro)
// para encadear mais processos utilizamos o método THEN;

//alguns recursos do JS (fetch API) e bibliotecas retornam promises


//criação de uma promessa

const myPromise = new Promise((resolve, reject) => {

    const nome = "bruno";

    if(nome == "bruno"){
        resolve("Usuário encontrado");
    } else {
        reject("Usuário não encontrado");
    };

});

myPromise.then( (data) => {
    console.log(data)
});


// encadeamento de then's
const myPromise2 = new Promise((resolve, reject) => {

    const nome = "bruno";

    if(nome == "bruno"){
        resolve("Usuário encontrado");
    } else {
        reject("Usuário não encontrado");
    };

});

myPromise2.then( (data) => {
    return data.toUpperCase();
}).then( (dataModifity) => {
    console.log(dataModifity);
});


// retorno do catch
const myPromise3 = new Promise((resolve, reject) => {

    const nome = "heleno";

    if(nome == "bruno"){
        resolve("Usuário encontrado");
    } else {
        reject("Usuário não encontrado");
    };

});

myPromise3.then((data) => {
    console.log(data);
}).catch((err) => {
    console.log("aconteceu um erro:" + err);
});



// resolvendo varios promises com [ALL]
// no all a resposta só irá ser concluida quando todas as promessas forem concluidas
const p1 = new Promise((resolve, reject) => {
   setTimeout(() => {
        resolve("p1 ok");
   }, 2000);
});

const p2 = new Promise((resolve, reject) => {
    resolve("p2 ok");
});

const p3 = new Promise((resolve, reject) => {
    resolve("p3 ok");
});

const resolveAll = Promise.all([p1, p2, p3]).then((data) => {
    console.log(data);
});

console.log("depois do All");


// varias promessas com o [RACE]
// no race só é mostrado a resolve da promessa que terminar primeiro
const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
         resolve("p4 ok");
    }, 2000);
 });
 
 const p5 = new Promise((resolve, reject) => {
     resolve("p5 ok");
 });
 
 const p6 = new Promise((resolve, reject) => {
     resolve("p6 ok");
 });
 
 const resolveRace = Promise.race([p4, p5, p6]).then((data) => {
     console.log(data);
 });
 
 console.log("depois do race");







 // fetch request ma API do github
// fetch API

const userName = "Bruno-rasq";

fetch(`https://api.github.com/users/${userName}`, {
    method: 'GET',
    headers: {
        accept: 'application/ynd.github.3+json',
    },
}).then((response) => {
    console.log(typeof response);
    console.log(response);

    return response.json();
}).then((data) => {
    console.log(data)
}).catch((erro) => {
    console.log("houve um erro: " + erro);
});