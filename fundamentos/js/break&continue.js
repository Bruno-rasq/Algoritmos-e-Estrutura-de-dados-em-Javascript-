// ============= break e continue ===================

//com break podemos encerrar uma instrução
// com continue podemos pular uma instrução
// utilizado na maioria das vezes em loops

for(let i = 10; i >= 0; i--){

    console.log("numero: " + i);

    if( i === 5){
        break;
    }

};

console.log("deu o break");


let x = 0;

while(x <= 100){
    
    x += 10;

    if(x === 60){
        continue;
    }

    console.log("numero: " + x)

    if(x === 100){
        break;
    }
};