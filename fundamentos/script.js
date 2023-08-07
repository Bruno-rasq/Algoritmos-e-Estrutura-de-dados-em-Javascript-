console.log("Hello World");

// console
console.log("Console.log");
console.error("console.error");
console.warn("console.warn");


function Palindrono(str){
    
    // retirei todos os espaços em branco
    let palindro = str.split(/\s+/).join('');

    // fatiei a string para array
    let req = palindro.split('');

    // crie uma variavel que recebe uma inversão do array
    let reverse = req.map((item, indice, array) => {
        return array[array.length - indice - 1];
    });

    //verifiquei se os dois array são iguais
    let response = JSON.stringify(req) === JSON.stringify(reverse);

    return console.log(response);
}

Palindrono("race car");
Palindrono("eye");
Palindrono("codict");

