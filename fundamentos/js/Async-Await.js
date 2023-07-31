// ==================== ASYNC AWAIT =====================

//funcionam como as promises porem mais simples

//precisamos declarar a função com a palavra async;
// e quando for necessário aguardar uma informação utilizamos o await

// tentar usar awiat sem o async gera um erro


//sintaxe
function PrimeiraFuncao() {

    return new Promise((resolve) => {

        setTimeout(() => {
            console.log("espere por isso");
            resolve()
        }, 3000)

    })
};

async function segundaFuncao(){

    console.log("iniciou");

    await PrimeiraFuncao();

    console.log("terminou");
};

segundaFuncao();


// ======= prático ==========
function getUser(id) {
    return fetch(`https://reqres.in/api/user?id=${id}`).then(data => data.json()).catch(erro => console.log(erro));
};

async function ShowUsername(id) {

    try {
        const user = await getUser(id);
        console.log(`o nome do usuário é: ${user.data.first_name}`);
    } catch {
        console.log(`erro: ${erro}`)
    }
    
};

ShowUsername(3);