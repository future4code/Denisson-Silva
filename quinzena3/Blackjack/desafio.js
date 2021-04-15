/* 
    console.log("Bem-vindo(a) ao jogo de Blackjack!")
    const carta = comprarCarta();
    let iniciar = confirm("Quer iniciar uma nova rodada?")
    if(iniciar === true){
       let userCard1 = comprarCarta();
       let userCard2 = comprarCarta();
       let pcCard1 = comprarCarta();
       let pcCard2 = comprarCarta();
 
       let pontuacaoUser = 0
       let pontuacaoPc = pcCard1.valor + pcCard2.valor
 
       let comprar = confirm("Suas cartas são: " + userCard1.texto + userCard2.texto + " A carta revelada do computador é: " + pcCard1.texto + "\n" + "Deseja comprar mais uma carta?" )
       let newCards = [userCard1.texto, userCard2.texto];
       let pontuacaoNova = [userCard1.valor, userCard2.valor]
       while(comprar === true){
          let maisUma = comprarCarta()
          newCards.push(maisUma.texto)   
          pontuacaoNova.push(Number(maisUma.valor))   
          comprar = confirm("Suas cartas são: " + newCards + " A carta revelada do computador é: " + pcCard1.texto + "\n" + "Deseja comprar mais uma carta?" )
       }
       for(let i = 0; i < pontuacaoNova.length; i++){
          pontuacaoUser = pontuacaoUser + pontuacaoNova[i]
       }
 
       
       console.log("Suas cartas são: " + newCards + ". " + "Sua pontuação é: " + pontuacaoUser + "\n" +
       "As cartas do computador são: " + pcCard1.texto + pcCard2.texto + " A pontuação do computador é: " + pontuacaoPc)
 
       if(pontuacaoUser > pontuacaoPc && pontuacaoUser <= 21){
          console.log("O usuário ganhou!")
       }
       else if(pontuacaoPc > pontuacaoUser && pontuacaoPc <= 21){
          console.log("O computador ganhou!")
       }
       else if(pontuacaoUser === pontuacaoPc){
          console.log("Empate!")
       }
       else if(pontuacaoPc > 21 && pontuacaoUser <= 21){
          console.log("O usuário ganhou!")
       }
       else if(pontuacaoUser > 21 && pontuacaoPc <= 21){
          console.log("O computador ganhou!")
       }
       
       else if(userCard1.texto && userCard2.texto === "A" || pcCard1.texto && pcCard2.texto === "A"){
          iniciar
       }
 
    }
    else{
       console.log("O jogo acabou")
    }
 
 
 
  */