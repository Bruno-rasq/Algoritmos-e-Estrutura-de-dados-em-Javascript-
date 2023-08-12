console.log("Hello World");

// console
console.log("Console.log");
console.error("console.error");
console.warn("console.warn");



function RomanNumber(n) {

    const RomanNumberMap = {
        0:["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], //Unidade
        1:["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"], //Dezena
        2:["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"], //Centena
        3:["M"] // Milhar
    };

    let str = Number(n).toString();
    let arry = str.split('').reverse();
    

    return console.log(arry);
}

RomanNumber(23);
RomanNumber(3);
RomanNumber(307);
