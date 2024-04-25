const ask = require("readline-sync")
let doadores = []  //Aqui fica armazenado os doadores

let sairApp = true

//1. Cadastrar Doador
function cadastrarDoador(){
    let pararCadastro = true
    while(pararCadastro){
        console.clear() //Para limpar o terminal    

        //Fazer as perguntas e armazenar resposta como var, para ser usado na criaçao do objeto
        console.log('\n----------------Sistema de Cadastro de Doador----------------')
        let name = ask.question('Qual o nome do doador? \nR:')
        if(name === 'break'){break}

        let idade = Number(ask.question('\nQuantos anos o doador tem? \nR:'))
        let kg = ask.question('\nQuantos kg o doador pesa? \nR:') + 'kg'
        let tipoSangue = ask.question('\nQual o tipo sanguineo: A, B, AB ou O? (Pode digitar A+, etc...)\nCaso nao saiba, digite: 1 \nR:').toUpperCase()
        let dataDoacao =  ask.question('\nQual foi a ultima vez que ele doou? (dd/mm/aaaa). \nCaso nao tenha doado nenhuma vez, digite: 0 \nCaso nao lembre, digite: 1.\nR:')
        
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
        console.log(`\n-------------------------------------\nParabens! O doador ${name} foi cadastrado.\n-------------------------------------\n`)
        
        //Para parar o loop
        if(ask.question('Deseja cadastrar um outro doador? y/n \nR:').toLowerCase() !== 'y'){console.log('------------------------------------------------'); pararCadastro = false}}

}

//2. Listar doadores
function mostrarDoadores(doadores){
    console.clear()
    console.log('-----------------------------------------------')
    console.log('LISTA DE DOADORES')
    console.log('-----------------------------------------------')
    
    //Cabeçalho da tabela, O .padENd() serve para dizer quantos caracteres minimos tem que ter a string
    console.log('NOME'.padEnd(50) + '   IDADE'.padEnd(10) + '    PESO'.padEnd(11) + '     TIPO DE SANGUE'.padEnd(16) + '      DATA DA ÚLTIMA DOAÇÃO')

    for (let i = 0; i < doadores.length; i++){
        let doador = doadores[i] //AQUI EU DECLARO QUE O DOADOR É IGUAL AO OBJETO DO INDICE[I], ENTAO ESSA VAR DOADOR VIRA UM OBJETO 
        //Para aparecer os dados do doador
        console.log(`${doador.nome.padEnd(50)}| ${doador.idade.toString().padEnd(10)}| ${doador.peso.padEnd(10)}|  ${doador.sangue.padEnd(15)}|    ${doador.ultimaDoacao}`)
     }

    console.log('-----------------------------------------------')
    ask.question('Para voltar aperte Enter.')
    console.clear()
}

//3. Buscar doador por tipo sanguíneo
function buscarPorTipoSanguineo(doadores) {
    console.clear();
    console.log('-----------------------------------------------')
    console.log('BUSCAR DOADOR POR TIPO SANGUINEO');
    console.log('-----------------------------------------------')

    let buscarOTipo = ask.question('Digite o tipo sanguineo que deseja buscar: \nCaso queria procurar por aqueles que nao possui identificado, basta digitar 1.\nR:').toUpperCase();
    if(buscarOTipo === '1'){buscarOTipo = 'Nao sei'}

    const doadoresEncontrados = doadores.filter(doadores => doadores.sangue === buscarOTipo)

    console.clear()

    if (doadoresEncontrados.length > 0) {
        console.log('\n-----------------------------------------------')
        console.log('DOADORES COM O SANGUE', buscarOTipo);
        console.log('-----------------------------------------------')
        console.log('NOME'.padEnd(50) + '   IDADE'.padEnd(10) + '    PESO'.padEnd(11) + '     TIPO DE SANGUE'.padEnd(16) + '      DATA DA ÚLTIMA DOAÇÃO')

        for (let i = 0; i < doadoresEncontrados.length; i++) {
            let doador = doadoresEncontrados[i]
            console.log(`${doador.nome.padEnd(50)}| ${doador.idade.toString().padEnd(10)}| ${doador.peso.padEnd(10)}|  ${doador.sangue.padEnd(15)}|    ${doador.ultimaDoacao}`)
        }
    } else {console.log('\nNenhum doador encontrado')}

    console.log('-----------------------------------------------')
    ask.question('\nPressione Enter para voltar ao menu principal...')
    console.clear()
}

//4.
function filterByDate(doadores) {
    console.clear()
    console.log('-----------------------------------------------')
    console.log('BUSCAR DOADOR POR DATA')
    console.log('-----------------------------------------------')
    let buscarAData = ask.question('Por qual data você quer buscar? dd/mm/aa. \nCaso queira pesquisar por aqueles que nunca doaram, digite 0. \nPelos que nao se lembram, digite 1 \nR:')

    if(buscarAData === '0'){buscarAData = 'Nunca doei'} else if(buscarAData === '1'){buscarAData= 'Nao me lembro'} else{buscarAData = Number(buscarAData.split('/').reverse().join(''))}
    
    console.clear()

    console.log('\n-----------------------------------------------')
    console.log('DOADORES ANTES DA DATA SOLICITADA');
    console.log('-----------------------------------------------');
    console.log('NOME'.padEnd(50) + '   IDADE'.padEnd(10) + '    PESO'.padEnd(11) + '     TIPO DE SANGUE'.padEnd(16) + '      DATA DA ÚLTIMA DOAÇÃO')

    for (let i = 0; i < doadores.length; i++) {
        let doador = doadores[i];

        if(buscarAData === Number){
        let dataDoador = Number(doador.ultimaDoacao.split('/').reverse().join(''));
        } else {dataDoador = doador.ultimaDoacao.split('/').reverse().join('') }

        if (buscarAData >= dataDoador) {
        console.log(`${doador.nome.padEnd(50)}| ${doador.idade.toString().padEnd(10)}| ${doador.peso.padEnd(10)}|  ${doador.sangue.padEnd(15)}|    ${doador.ultimaDoacao}`);
        } else {console.log('NENHUM DOADOR ENCONTRADO NO PERIODO')}
    } 

    console.log('-----------------------------------------------');
    ask.question('\nAperte Enter para voltar... ');
}


//MENU APP
function menuApp(){
    while(sairApp){
        console.clear()
        console.log('===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====\n1. Cadastrar doador\n2. Listar doadores\n3. Buscar doador por tipo sanguíneo\n4. Buscar doador por data da última doação\n5. Sair')
        console.log('\t*Caso queira cancelar o cadastro digite: break na pergunta do nome!')
        let escolhaUser = Number(ask.question('Escolha uma opcao:\nR:'))

        switch (escolhaUser){
            case 1:
                cadastrarDoador()
                break
            
            case 2:
                mostrarDoadores(doadores)
                console.clear()
                break
            
            case 3:
                buscarPorTipoSanguineo(doadores)
                break

            case 4:
                filterByDate(doadores)
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
        

