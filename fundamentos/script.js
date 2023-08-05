console.log("Hello World");

// console
console.log("Console.log");
console.error("console.error");
console.warn("console.warn");


function swapVowels(word){
    
    let lower = word.toLowerCase();
    let arr = lower.split('');

    let response = arr.map((char) => {
        switch (char){
            case 'a':
                char = 1;
                break;
            
            case 'e':
                char = 2;
                break;

            case 'i':
                char = 3;
                break;

            case 'o':
                char = 4;
                break;
                
            case 'u':
                char = 5;
                break;

            default:
        };

        return char;
    });

    return console.log(response.join(''));
}

swapVowels("hello world!");