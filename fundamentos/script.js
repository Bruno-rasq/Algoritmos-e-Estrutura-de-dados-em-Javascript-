console.log("Hello World");

// console
console.log("Console.log");
console.error("console.error");
console.warn("console.warn");


function HideEmail(email){

    let arr = email.split("@");
    let part1 = arr[0].split('');
    let part2 = arr[arr.length -1].split('');

    let inicial = part1[0];
    let last = part2[part2.length -1];

    part2.pop();
    part1.shift();

    let req1 = inicial + part1.map((char) => {
        return char = "*";
    }).join('');

    let req2 = part2.map((char) => {
        return char = "*";
    }).join('') + last;

    return console.log( req1 + "@" + req2);
}

HideEmail("marie@gmail.com");
HideEmail("johndoe@gmail.com");