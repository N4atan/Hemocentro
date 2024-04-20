let ask= require("readline-sync")

let doadores = []


//Essa função serve para adicionar um objeto (doador) na nossa lista de doadores (array doadores)
function addDoador1(name, year, kg){ 
    let doador = {
        nome: name  ,
        idade: year    ,
        peso: kg    ,
    }
    doadores.push(doador)
}

//Essa aqui seria a funçao principal, no caso 1.
function cadastrarDoador(){
    const name = ask.question('Qual seu nome? ')
    const idade = Number(ask.question('Quantos anos voce tem? '))
    const peso = Number(ask.question('Quantos kg voce pesa? '))

    addDoador1(name, idade, peso)

    console.log(`Parabens !\nVoce foi cadastrado.\n`, doadores)
}

//NO layout de entrada, após o usuario ter escolhido a opçao 1. sera executada essa funçõo!
cadastrarDoador()
