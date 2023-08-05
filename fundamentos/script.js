console.log("Hello World");

// console
console.log("Console.log");
console.error("console.error");
console.warn("console.warn");


function HideEmail(email){

    let ahoba = email.indexOf("@");
    let partOne = email.slice(0, ahoba);
    let partTwo = email.slice(ahoba + 1, email.length);

    let Part_one_split = partOne.split('');
    let inicial = Part_one_split[0];
    Part_one_split.shift();
    let req_one = Part_one_split.map((char) => {
        return char = "*"
    }).join('');

    let resp_one = inicial + req_one;

    let Part_Two_split = partTwo.split('');
    let last = Part_Two_split[Part_Two_split.length -1];
    Part_Two_split.pop();
    let req_two = Part_Two_split.map((char) => {
        return char = "*"
    }).join('');

    let resp_two = req_two + last;

    let response = resp_one + "@" + resp_two;

    return console.log(response);
};

HideEmail("johndoe@gmail.com");
HideEmail("bruno@gmail.com");
HideEmail("meumanoheleno@gmail.com.br");

//.pop() remove ultimo elemento do array
//.push() adiciona um elemento no final do array

//.shift() remove o primeiro elemento do array
//.unshift() adiciona um elemento no inicio do array;

//.splice() remove, adiciona ou substitui elemento em posição especifica de array