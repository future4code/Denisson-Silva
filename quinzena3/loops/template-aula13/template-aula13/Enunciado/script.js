// Exercicio 1
/*
O código é um laço que irá atribuir o valor 1 para a let valor 5x 
Console irá imprimir o numero 4*/

// Exercicio 2
/*
A. Será impresso os numeros: 19, 21, 23, 25, 27 e 30 
B. for of seria suficiente para acessar cada elemento*/

// Exercicio 3
// A.
/* const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
 for(let i = 0; i < array.length; i++){
    let result = array[i]
    console.log(result)
}  */

// B.
/* const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
 for(let i = 0; i < array.length; i++){
    let result = array[i]
    console.log(result/10)
}  */

// C.
/* const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let novoArray = []
 for(let i = 0; i < array.length; i++){
    let result = array[i]
    if(result % 2 === 0){
       novoArray.push(result)
    }
    console.log(novoArray)
}  */

// D.
/* const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let arrayStrings =[]
 for(let i = 0; i < array.length; i++){
    let result = array[i]
    let string = "O elemento do índex " + i + " é: " + result;
    arrayStrings.push(string)
    console.log(arrayStrings)
} */ 

// E. 
/* const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let arrayStrings =[]
let maiorNumero = 0
let menorNumero = 0
 for(let i of array){
    if(i > maiorNumero){
        maiorNumero = i
    }
    else if(i < menorNumero){
        menorNumero = i
    }
}   console.log("O maior número é ", maiorNumero, " e o menor é ", menorNumero) */

// Desafio 1

/* let instrucao = Number(prompt("Selecione o número da opção 1-Intruções 2-Começar")) 
if(instrucao === 2){
    arrayPalpite = []    
    let numberUser = Number(prompt("Digite seu número secreto"))
    console.log("Vamos jogar!")
    while(numberUser !== arrayPalpite[arrayPalpite.length-1]){
        
        let palpite = (Number(prompt("Qual o seu palpite?")))
        console.log("O número chutado foi: ", palpite)
        arrayPalpite.push(palpite)
        if(numberUser > arrayPalpite[arrayPalpite.length-1]){
            console.log("Errou. O número escolhido é menor")
        }

        else if(numberUser < arrayPalpite[arrayPalpite.length-1]){
            console.log("Errou. O número escolhido é Maior")
        }

        else {
            console.log("Acertou!!")
            console.log("O número de tentativas foi: ", arrayPalpite.length)
        }

    }
} */

// Desafio 2

/* let instrucao = Number(prompt("Selecione o número da opção 1-Intruções 2-Começar")) 
if(instrucao === 2){
    arrayPalpite = []    
    let user = Math.floor(Math.random() * 10);
    console.log("Vamos jogar!")
    while(user !== arrayPalpite[arrayPalpite.length-1]){
        
        let palpite = (Number(prompt("Qual o seu palpite?")))
        console.log("O número chutado foi: ", palpite)
        arrayPalpite.push(palpite)
        if(user > arrayPalpite[arrayPalpite.length-1]){
            console.log("Errou. O número escolhido é menor")
        }

        else if(user < arrayPalpite[arrayPalpite.length-1]){
            console.log("Errou. O número escolhido é Maior")
        }

        else {
            console.log("Acertou!!")
            console.log("O número de tentativas foi: ", arrayPalpite.length)
        }

    }
} */


// Reflexão: Foi muito mais facil implementar o comando para numero aleatorio.