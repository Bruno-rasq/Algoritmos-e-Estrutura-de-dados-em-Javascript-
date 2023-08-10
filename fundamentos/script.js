console.log("Hello World");

// console
console.log("Console.log");
console.error("console.error");
console.warn("console.warn");


function compressString(str) {

    let compress = ""
    let matriz = str.split("");

    for(let i = 0; i < matriz.length; i++){
       let count = 1
       let current = matriz[i]

       while( i < matriz.length && matriz[i] == matriz[i+1]){
        count++
        i++
       }

       if(count !== 1){
        compress += current + count;
       } else {
        compress += current
       }

    }
    
    return console.log(compress)
}

compressString("abbcc");
compressString("aaabbbccccc");