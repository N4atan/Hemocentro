const ask = require('readline-sync')


let doadores = []

//Pra ficar em loop, perguntando varias vezes
while(true){

    function cadastrarDoador(){
        //Fazer as perguntas e armazenar resposta como var, para ser usado na criaçao do objeto
        let name = ask.question('Qual seu nome? \nR:')
        let idade = Number(ask.question('\nQuantos anos voce tem? \nR:'))
        let kg = Number(ask.question('\nQuantos kg voce pesa? \nR:'))
        let tipoSangue = ask.question('\nQual seu tipo sanguineo: A, B, AB ou O? \nCaso nao saiba, digite: 1 \nR:')
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
        console.log("Parabens !\nVoce foi cadastrado.\n", doadores)
    }

    //Chamar a funçao acima
    cadastrarDoador()

    //Para parar o loop
    if(ask.question('Deseja cadastrar um novo colaborador? y/n \nR:').toLowerCase() === 'n'){
        break
    }

}