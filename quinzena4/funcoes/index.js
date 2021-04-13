
// EXERCÍCIO 1
/*
A. A função vai imprimir 10 e depois 50

B. Não acontecerá nenhuma ação no console.
*/

//EXERCÍCIO 2
/*
A. A função irá imprimir os nomes Darvas Caio e joao

B. Será impresso Amanda e Caio
*/

//EXERCÍCIO 3
/*A função pega todos os números pares do array de origem, multiplica por ele mesmo e retorna o resultado par o novo array
poderia se chamar "multiplicadorPares"*/



// EXERCÍCIO 4
//A. 
function sobreMim() {

console.log("Eu sou Denisson, tenho 29 anos, moro em Aracaju e sou sonhador.")
}

//B.
function informacoes(nome, idade, cidade, status) {
console.log("Eu sou ", nome, " tenho ", idade, " anos, moro em ", cidade, " e sou ", status, ".")
}

informacoes("Denisson", 23, "Aracaju", "estudante")

//EXERCÍCIO 5
//A
function soma(number1, number2){
  return number1 + number2
}

console.log(soma(2,2))

//B.
function maiorOuIgual(numero1, numero2){
  if(numero1 <= numero2){
    return true
  }
  else{
    return false
  }
}

//C.
function imprimeDezVezes(mensagem){
  for(let i = 0; i < 10; i++){
    console.log(mensagem)
  } 
    return mensagem
}
console.log(imprimeDezVezes("oi"))

//EXERCÍCIO 6
//A. 
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
let total
function tamanhoArray(array){
  for(let i = 0; i < array.length; i++){
    total = total + array[i]
    return array.length
    
  }
}
console.log(tamanhoArray(array))

//B.
function verificaNumeroPar(number){
  if(number % 2 === 0){
    return true
  }
  else{
    return false
  }
}

//C.

const novosPares = []
function somentePares(array){
for(let i = 0; i < array.length; i++){
  if(array[i] % 2 === 0){
    novosPares.push(i)
  }
} 
}
somentePares(array)
for(let i = 0; i < novosPares.length; i++){
  let numeroPar = array[i]
  //console.log(numeroPar) 
}
  
//D.

const novosPares = []
function somentePares(array){
for(let i = 0; i < array.length; i++){
  verificaNumeroPar(array[i])
  novosPares.push(verificaNumeroPar(i))
} 
}
somentePares(array)
for(let i = 0; i < novosPares.length; i++){
  let numeroPar = array[i]
  console.log(numeroPar)
}






