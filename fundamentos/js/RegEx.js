// ========================= REGEX ===========================

// RegEx = regular expressions

// o regex é uma notação que faz verificações em textos com três principais aplicações

// [buscar] 
//   serve para encontrar padrões em um texto, como por exemplo emcontrar
//   textos em formato de data 

//[validações]
//   verificar se determinada informação atendo um padrão especifico
//    como por exemplo verificar se o valor de um CPF está em um modelo válido

//[substituições]


// exem:

// ctrl + f ====>  abre uma caixa de busca com opção de buscar por regex
// tudo dentro de colchetes representa um caracter [o] -> ocaliza todos os "O" do arquivo
// [02] -> busca por 0 ou 2
// [0-9] -> busca por numeros de 0 a 9 

// [0][0] -> busca por dois zeros juntos no texto 00
// [0]{2} -> mesma coisa // quantificador
// [0][0][0]  ou [0]{3}

// o $ no regexrepresenta o fim da linha, basicamente começa a busca pelo final da linha
// 098 7didgystyghr 567 aqui [0-9]{3} - ele vai pegar o "098", com o $ ele pega o "567"
// oposto ao $ tem o ^, que começa a busca pelo inicio da linha


// [0-9]+[-][a-z]

// 36784956784-y
// 36784956784-g
// 36784956784-r
// 36767956784-y
// 36784956784-t
// 36784956784-a
// 36784896784-b
// 36784956784-l
// 36784956784-f


// CPF = 037.654.890.00
// regex = [0-9]{3}[.][0-9]{3}[.][0-9]{3}[.][0-9]{2}



// exemplo trocando datas do formato americano para o formato utilizado no brasil

// 24/05/2020

{
    data: "22/07/2001"
}

<data>01/08/2023</data>

// [0-9]{4}[-][0-9]{2}[-][0-9]{2}     para       [0-9]{2}[-][0-9]{2}[-][0-9]{4}
// se adicionar um () envolvendo um comando do regexele acaba se tornando um grupo

//([0-9]{4}) [-] ([0-9]{2}) [-] ([0-9]{2}) 
// grupo1          grupo 2       grupo3

// o $ tambem pode ser utilizadfo para manipular a ordem dos grupos

// $1/$2/$3   para     $3/$2/$1