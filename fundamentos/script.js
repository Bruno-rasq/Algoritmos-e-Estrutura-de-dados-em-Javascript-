console.log("Hello World");

// console
console.log("Console.log");
console.error("console.error");
console.warn("console.warn");



function DecToRoman(n) {

    const RomanNumberMap = {
        u: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], //Unidade
        d: ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"], //Dezena
        c: ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"], //Centena
        m: ["M", "MM", "MMM", "MMMM", "MMMMM"] // Milhar
    };

    if (n > 0 && n < 5000) {
        let str = Number(n).toString();
        let arry = str.split('').reverse();

        let uni = Number(arry[0]);
        let dez = Number(arry[1]);
        let cen = Number(arry[2]);
        let mil = Number(arry[3]);

        arry[0] = RomanNumberMap.u[uni - 1] ?? "";
        arry[1] = RomanNumberMap.d[dez - 1] ?? "";
        arry[2] = RomanNumberMap.c[cen - 1] ?? "";
        arry[3] = RomanNumberMap.m[mil - 1] ?? "";

        let response = arry.reverse().join('');

        return console.log(response);

    } else {
        return console.error("valor inválido")
    };
}



