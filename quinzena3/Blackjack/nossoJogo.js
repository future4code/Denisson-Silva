
   console.log("Bem-vindo(a) ao jogo de Blackjack!")
   let iniciar = confirm("Quer iniciar uma nova rodada?")
   if(iniciar === true){
      let userCard1 = comprarCarta();
      let userCard2 = comprarCarta();
      let pcCard1 = comprarCarta();
      let pcCard2 = comprarCarta();

      let pontuacaoUser = userCard1.valor + userCard2.valor
      let pontuacaoPc = pcCard1.valor + pcCard2.valor

      console.log("Usuário - cartas: ", userCard1.texto, userCard2.texto, " Pontuação ", pontuacaoUser)
      console.log("Computador - cartas: ", pcCard1.texto, pcCard2.texto, " Pontuação ", pontuacaoPc)


      if(pontuacaoUser > pontuacaoPc){
         console.log("O usuário ganhou!!")
      }
      else if(pontuacaoUser < pontuacaoPc){
         console.log("O computador ganhou!")
      }
      else if(pontuacaoUser === pontuacaoPc){
         console.log("Empate!")
      }
      else if(userCard1.texto && userCard2.texto === "A" || pcCard1.texto && Card2.texto === "A" ){
         iniciar
      }

   }
   else{
      console.log("O jogo acabou")
   }



