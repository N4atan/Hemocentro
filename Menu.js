const ask = require("readline-sync")
let doadores = []
let sairApp = true

//1. Cadastrar Doador
function cadastrarDoador(){
    let pararCadastro = true
    while(pararCadastro){
        console.clear()
        //Fazer as perguntas e armazenar resposta como var, para ser usado na criaçao do objeto
        console.log('\n----------------Sistema de Cadastro de Doador----------------')
        let name = ask.question('Qual seu nome? \nR:')
        let idade = Number(ask.question('\nQuantos anos voce tem? \nR:'))
        let kg = Number(ask.question('\nQuantos kg voce pesa? \nR:'))
        let tipoSangue = ask.question('\nQual seu tipo sanguineo: A, B, AB ou O? \nCaso nao saiba, digite: 1 \nR:').toUpperCase()
        let dataDoacao =  ask.question('\nQual foi a ultima vez que duou? (dd/mm/aaaa). \nCaso nao tenha doado nenhuma vez, digite: 0 \nCaso voce nao lembre, digite: 1.\nR:')
        
        //Isso serve para padronizar algumas respostas
        if(tipoSangue === '1'){tipoSangue = 'Nao sei'}
        if(dataDoacao === '0'){dataDoacao = 'Nunca doei'} else if(dataDoacao === '1'){dataDoacao = 'Nao me lembro'}
        
        //Criação do objeto
        let doador = {
            nome: name  ,
            idade: idade    ,
            peso: kg    ,
            sangue: tipoSangue ,
            ultimaDoacao: dataDoacao   ,
        }
        
        //Adiciona o objeto récem criado na array doadores. (No caso adiciona os dados do doador na lista de doadores)
        doadores.push(doador)
        console.log("\n\nParabens! Voce foi cadastrado.\n")
        
        //Para parar o loop
        if(ask.question('Deseja cadastrar um novo colaborador? y/n \nR:').toLowerCase() === 'n'){console.log('------------------------------------------------'); pararCadastro = false}}

}

//2. Listar doadores
function mostrarDoadores(doadores){
    console.clear()
    console.log('-----------------------------------------------')
    console.log('LISTA DE DOADORES')
    console.log('-----------------------------------------------')
    console.log('NOME\t ')
    for (let i = 0; i < doadores.length; i++){
        let doador = doadores[i]
        console.log(doador.nome)
    }
    console.log('-----------------------------------------------')
    if (ask.question('Para voltar digite: 9.\nR:') === '9'){menuApp()    ;   console.clear()}
}

//MENU APP
function menuApp(){
    while(sairApp){
        console.clear()
        console.log('===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====\n1. Cadastrar doador\n2. Listar doadores\n3. Buscar doador por tipo sanguíneo\n4. Buscar doador por data da última doação\n5. Sair')

        let escolhaUser = Number(ask.question('Escolha uma opcao:\nR:'))

        switch (escolhaUser){
            case 1:
                cadastrarDoador()
                break
            
            case 2:
                mostrarDoadores(doadores)
                console.clear()
                break    

            case 5:
                console.clear()
                sairApp = false

            default:
                console.log('Por favor, selecione uma opção')
                break
        }
    }
}

menuApp()